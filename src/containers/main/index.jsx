import React, { PureComponent, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import firebase from '../../firebase/firebase-config'
import { getProfile } from '../../redux/userProfile/actions';
import { setCurrentOrg } from '../../redux/orgs/actions'
import { getProjects } from '../../redux/projects/actions'

import Dashboard from '../dashboard/index'
import Meetings from '../meetings/index'
import Tasks from '../tasks/index'
import Documents from '../documents/index'
import ChatRooms from '../chat/index'
import Authentication from '../auth/index'
import Organization from './orgs/index'

import Menu from './menu/index';
import AppHeader from './header/index'
import { MainContainer, Row } from './index.styles.jsx'

class Main extends PureComponent {

  async componentDidMount() {
    const {
      profile,
      setCurrentOrg,
      getProfile,
      getProjects,
      currentOrg,
      currentScreen,
      history
    } = this.props
    history.push(`/${currentScreen}`)
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) await getProfile(user.uid)
    })
    if (profile.currentOrg) await setCurrentOrg(profile.currentOrg)
    if (currentOrg) await getProjects(currentOrg.orgId)
  }

  render() {
    return (
      <MainContainer>
        {this.props.auth ? this.renderContent() : <Authentication />}
      </MainContainer>
    )
  }

  renderContent = () => {
    const { profile, currentOrg } = this.props
    if (profile?.currentOrg && currentOrg) {
      return (
        <Fragment>
          <AppHeader />
          <Row>
            <Menu />
            <Switch>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/meetings' component={Meetings} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/documents' component={Documents} />
              <Route path='/chat' component={ChatRooms} />
            </Switch>
          </Row>
        </Fragment>
      )
    } else {
      return this.renderCreateOrgs()
    }
  }

  renderCreateOrgs = () => {
    return <Organization />
  }
}


const mapStateToProps = ({ profileState, authState, orgsState, applicationState }) => {
  return {
    profile: profileState?.profile,
    auth: authState?.auth,
    currentOrg: orgsState?.current_org,
    currentScreen: applicationState.current_screen
  }
}
const mapDispatchToProps = (disptach) => {
  return {
    getProfile: (userId) => disptach(getProfile(userId)),
    setCurrentOrg: (orgId) => disptach(setCurrentOrg(orgId)),
    getProjects: (orgId) => disptach(getProjects(orgId))

  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
