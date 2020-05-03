import React, { Component } from 'react'
import { ScrollAbleContainer } from '../../components/common.styles'
import ChatItem from './ChatItem'

import { Container } from './ChatScreen.styles'
import Ajmal from '../../assets/ajmal.png'
import img from '../../assets/img.png'
import img1 from '../../assets/img1.jpg'
const messages = [
  {
    senderPhoto: Ajmal,
    senderName: 'Ajmal Jalal',
    text: 'This is a message from Ajmal jalal to everyone in this group. Be careful about me I am a very  from Ajmal jalal to everyone in this group. from Ajmal jalal to everyone in this group. from Ajmal jalal to everyone in this group. from Ajmal jalal to everyone in this group.good man',
    date: '5/2/2020',
    time: '9:32AM',
    image: ''
  },

  {
    senderPhoto: Ajmal,
    senderName: 'Meena Alemi',
    text: 'This is a message from Ajmal jalal to everyone in from Ajmal jalal to everyone in this group. from Ajmal jalal to everyone in this group. from Ajmal jalal to everyone in this group.this group. Be careful about me I am a very good man',
    date: '5/2/2020',
    time: '9:32AM',
    image: img1

  },

  {
    senderPhoto: Ajmal,
    senderName: 'Kausar',
    text: 'This is a message from Ajmal jalal to everyone in this group.',
    date: '5/2/2020',
    time: '9:32AM',
  },
  {
    senderPhoto: Ajmal,
    senderName: 'Iman',
    text: 'This is a message from Ajmal jalal to from Ajmal jalal to everyone in this group. from Ajmal jalal to everyone in this group. from Ajmal jalal to everyone in this group.everyone in this group. Be careful about me I am a very good man',
    date: '5/2/2020',
    time: '9:32AM',
  },
  {
    senderPhoto: Ajmal,
    senderName: 'Lolo',
    text: 'This is a message from Ajmal jalal to everyone in this group.',
    date: '5/2/2020',
    time: '9:32AM',
  },
  {
    senderPhoto: Ajmal,
    senderName: 'Kausar',
    text: 'This is a message from Ajmal jalal to everyone in this group.',
    date: '5/2/2020',
    time: '9:32AM',
    image: Ajmal
  },
  {
    senderPhoto: Ajmal,
    senderName: 'Kausar',
    text: 'This is a message from Ajmal jalal to everyone in this group.',
    date: '5/2/2020',
    time: '9:32AM',
    image: img
  },
]

class ChatScreen extends Component {
  render() {
    return (
      <ScrollAbleContainer>
        <Container>
          {this.renderChatItems()}
        </Container>
      </ScrollAbleContainer>
    )
  }

  renderChatItems = () => {
    return messages.map(message => {
      return <ChatItem message={message} />
    })
  }
}

export default ChatScreen;