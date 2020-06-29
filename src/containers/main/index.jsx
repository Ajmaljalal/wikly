import React, { PureComponent, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { signIn, signOut } from '../../redux/authentications/authActions'

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

class Main extends PureComponent {

  componentDidMount() {
    
  }

  render() {
    return (
      <MainContainer>
        {!this.props.user.isEmpty ? this.renderContent() : <Authentication />}
      </MainContainer>
    )
  }

  renderContent = () => {
    const { currentOrg } = this.props.profile
    if (currentOrg) {
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
    user: state.firebase?.auth,
    profile: state.firebase?.profile,
    // orgs: firestore.data.orgs
  }
}
const mapDispatchToProps = (disptach, ownProps) => {
  return {
    signIn: (credentials) => disptach(signIn(credentials)),
    signOut: () => disptach(signOut())
  }
}
export default compose(
  firestoreConnect((state) => 
    [{
      collection: 'orgs',
      doc: state?.firebase?.profile?.currentOrg,
    },
    {
      collection: 'users',
      doc: 'tKQwZqL6dbY0LiZ2R63zMPd6QEv2',
    }
    ]
    
  ),
  connect(mapStateToProps, mapDispatchToProps))(Main);
