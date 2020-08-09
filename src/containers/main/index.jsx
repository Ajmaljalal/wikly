import React, { PureComponent, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import firebase from '../../firebase/firebase-config'
import { getProfile } from '../../redux/userProfile/actions';
import { setCurrentOrg } from '../../redux/orgs/actions'

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

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await this.props.getProfile(user.uid)
      }
    })
    this.props.setCurrentOrg(this.props.profile?.currentOrg)
  }

  render() {
    return (
      <MainContainer>
        {this.props.auth ? this.renderContent() : <Authentication />}
      </MainContainer>
    )
  }

  renderContent = () => {
    const { profile } = this.props
    if (profile?.currentOrg) {
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


const mapStateToProps = (state) => {
  return {
    profile: state.profileState?.profile,
    auth: state.authState?.auth,
  }
}
const mapDispatchToProps = (disptach, ownProps) => {
  return {
    getProfile: (userId) => disptach(getProfile(userId)),
    setCurrentOrg: (orgId) => disptach(setCurrentOrg(orgId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
