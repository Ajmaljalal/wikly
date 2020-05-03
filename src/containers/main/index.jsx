import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import { MainContainer, Column} from './index.style.jsx'
import Menu from './menu/index';
import AppHeader from './header/index'

import Dashboard from '../dashboard/index'
import Meetings from '../meetings/index'
import Tasks from '../tasks/index'
import Documents from '../documents/index'
import ChatRooms from '../chat/index'

class Main extends Component {

  render() {
    console.log('home page')
    return (
      <MainContainer>
        <Menu/>
        <Column>
          <AppHeader/>
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/meetings' component={Meetings} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/documents' component={Documents} />
            <Route path='/chat-rooms' component={ChatRooms} />
          </Switch>
        </Column>
      </MainContainer>
    )
  }
}

export default Main;
