import React, { Component } from 'react'
import {  BodyContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class ChatRooms extends Component {
    render() {
        console.log('dashboard page')
        return (
            <BodyContainer>
                <ContentHeader title ={'ChatRooms'}/>
            </BodyContainer>
        )
    }
}

export default ChatRooms;