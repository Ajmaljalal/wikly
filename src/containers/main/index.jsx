import React, { PureComponent, Fragment, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import firebase from '../../firebase/firebase-config'
import { getProfile } from '../../redux/userProfile/actions';
import { setCurrentOrg } from '../../redux/orgs/actions'
import { getProjects } from '../../redux/projects/actions'
import { MainContainer, Row } from './index.styles.jsx'
import Menu from './menu/index'
import AppHeader from './header/index'

const Dashboard = lazy(() => import('../dashboard/index'))
const Meetings = lazy(() => import('../meetings/index'))
const Tasks = lazy(() => import('../tasks/index'))
const Documents = lazy(() => import('../documents/index'))
const ChatRooms = lazy(() => import('../chat/index'))
const Authentication = lazy(() => import('../auth/index'))
const Organization = lazy(() => import('./orgs/index'))

class Main extends PureComponent {

  async componentDidMount() {
    const {
      profile,
      setCurrentOrg,
      getProfile,
      currentScreen,
      history
    } = this.props

    history.push(`/${currentScreen}`)
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) await getProfile(user.uid)
    })
    if (profile?.currentOrg) await setCurrentOrg(profile.currentOrg)
  }

  componentDidUpdate(prevProps) {
    const { orgsState, projects, getProjects } = this.props
    if (prevProps.orgsState.current_org !== orgsState.current_org && !projects) {
      console.log('main did update called')
      getProjects(orgsState.current_org.orgId)
    }
  }

  render() {
    return (
      <MainContainer>
        {
          this.props.auth ? this.renderContent() :
            <Suspense fallback={<div>Loading...</div>}>
              <Authentication />
            </Suspense>
        }
      </MainContainer>
    )
  }

  renderContent = () => {
    const { profile, orgsState } = this.props
    if (!profile) {
      return null
    }
    if (profile?.currentOrg && orgsState.current_org) {
      return (
        <Fragment>
          <AppHeader />
          <Row>
            <Menu />
            <Suspense fallback={<div>Loading...</div>}>
              {this.renderRoutes()}
            </Suspense>
          </Row>
        </Fragment>
      )
    } else {
      return this.renderCreateOrgs()
    }
  }

  renderRoutes = () => {
    const { gettingProjects } = this.props
    if (gettingProjects) {
      return null
    }
    return (
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/meetings' component={Meetings} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/documents' component={Documents} />
        <Route path='/chat' component={ChatRooms} />
      </Switch>
    )
  }

  renderCreateOrgs = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Organization />
      </Suspense>
    )
  }
}

const mapStateToProps = ({ profileState, authState, orgsState, applicationState, projectsState }) => {
  return {
    profile: profileState?.profile,
    auth: authState?.auth,
    orgsState: orgsState,
    projects: projectsState.projects,
    gettingProjects: projectsState.gettingProjects,
    currentProject: projectsState.current_project,
    currentScreen: applicationState.current_screen
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: (userId) => dispatch(getProfile(userId)),
    setCurrentOrg: (orgId) => dispatch(setCurrentOrg(orgId)),
    getProjects: (orgId) => dispatch(getProjects(orgId)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
