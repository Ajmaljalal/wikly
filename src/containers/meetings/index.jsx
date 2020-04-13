import React, { Component } from 'react'
import {  ContentBody } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'
import MeetingColumn from './MeetingColumn'
import { Container } from './meetings.styles'

class Meetings extends Component {
    render() {
        console.log('meetings page')
        return (
            <ContentBody>
                <ContentHeader title ={'Meetings'}/>
                <Container>
                    <MeetingColumn date={'12 Aprile, Monday'} />
                    <MeetingColumn date={'17 Aprile, Friday'} />
                    <MeetingColumn date={'20 Aprile, Monday'} />
                    <MeetingColumn date={'25 Aprile, Thursday'} />
                    <MeetingColumn date={'26 Aprile, Friday'} />
                </Container>
            </ContentBody>
        )
    }
}

export default Meetings;