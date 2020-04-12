import React, { Component } from 'react'
import {  ContentBody } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'
import { Container, MeetingsColumn } from './meetings.styles'

class Meetings extends Component {
    render() {
        console.log('dashboard page')
        return (
            <ContentBody>
                <ContentHeader title ={'Meetings'}/>
                <Container>
                    <MeetingsColumn>This is div one </MeetingsColumn>
                    <MeetingsColumn>This is a text </MeetingsColumn>
                    <MeetingsColumn>This is a text </MeetingsColumn>
                    <MeetingsColumn>This is a text </MeetingsColumn>
                    <MeetingsColumn>This is a text </MeetingsColumn>
                    <MeetingsColumn>This is a text </MeetingsColumn>
                    <MeetingsColumn>This is a text </MeetingsColumn>
                </Container>
            </ContentBody>
        )
    }
}

export default Meetings;