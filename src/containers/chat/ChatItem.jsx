import React from 'react'

import {
  Container,
  UserPhoto,
  UserNameMessageTextWrapper,
  UserName,
  MessageText,
  MessageAttachment
} from './chatItem.styles'

export default function ChatItem({ message }) {
  return (

    <Container>
        <UserPhoto>
          <img src={message.senderPhoto} alt='user-avatar' />
        </UserPhoto>
        <UserNameMessageTextWrapper>
          <UserName>{message.senderName}</UserName>
          <MessageText>{message.text}</MessageText>
          {renderMessageImage(message.image)}
        </UserNameMessageTextWrapper>
    </Container>
  )
}

const renderMessageImage = (image) => {
  if (image) {
    return (
      <MessageAttachment>
        <img src={image} />
      </MessageAttachment>
    )
  } return null
}
