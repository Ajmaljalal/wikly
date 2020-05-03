import React, { Component } from 'react'
import {
  Container,
  ActiveChatRoom,
  ActiveChatRoomName,
  ActiveChatRoomDetails,
  ActiveChatDetailsIcon,
  ToggleMenu,
} from './chatsMenu.styles'

import participantsIcon from '../../assets/icons/participants.svg'
import attachIcon from '../../assets/icons/attach.svg'

export default class ChatsMenu extends Component {

  state = {
    isOpen: true
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <Container isOpen={this.state.isOpen}>
        {this.renderToggleMenuIcon()}
        {this.renderActiveChatRoom()}
      </Container>
    )
  }

  renderActiveChatRoom = () => {
    return (
      <ActiveChatRoom isOpen={this.state.isOpen}>
        <ActiveChatRoomName>
          Web UI
        </ActiveChatRoomName>
        <ActiveChatRoomDetails>
          <ActiveChatDetailsIcon>
            <img src={participantsIcon} /> 23
          </ActiveChatDetailsIcon>
          <ActiveChatDetailsIcon>
            <img src={attachIcon} /> 32
          </ActiveChatDetailsIcon>
        </ActiveChatRoomDetails>
      </ActiveChatRoom>
    )
  }

  renderToggleMenuIcon = () => {
    return (
      <ToggleMenu onClick={this.toggleMenu}>
      </ToggleMenu>
    )
  }
}
