import React, { Component } from 'react'
import { BodyContainer } from '../../components/common.styles'
import { Container } from './index.styles'
import ChatsMenu from './ChatsMenu'
import ChatScreen from './ChatScreen'

class ChatRooms extends Component {
  render() {
    return (
      <BodyContainer isInChates={true}>
        <Container>
          <ChatsMenu />
          <ChatScreen />
        </Container>
      </BodyContainer>
    )
  }
}

export default ChatRooms;