import React, { PureComponent, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { MainContainer, Row } from './index.styles.jsx'
import Menu from './menu/index';
import AppHeader from './header/index'

import Dashboard from '../dashboard/index'
import Meetings from '../meetings/index'
import Tasks from '../tasks/index'
import Documents from '../documents/index'
import ChatRooms from '../chat/index'
import Authentication from '../auth/index'
import Organization from './orgs/index'
import { getProfile } from '../../redux/userProfile/actions';
import firebase from '../../firebase/firebase-config'
class Main extends PureComponent {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.props.getProfile(user.uid)
      }
    })
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
    if (!profile?.currentOrg) {
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
              <Route path='/chat-rooms' component={ChatRooms} />
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
    getProfile: (userId) => disptach(getProfile(userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
