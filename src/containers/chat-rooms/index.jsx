import React, { Component } from 'react'
import {  ContentBody } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class ChatRooms extends Component {
    render() {
        console.log('dashboard page')
        return (
            <ContentBody>
                <ContentHeader title ={'ChatRooms'}/>
            </ContentBody>
        )
    }
}

export default ChatRooms;