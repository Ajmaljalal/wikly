import React, { Component } from 'react'
import { BodyContainer, Container } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'
import MeetingColumn from './MeetingColumn'
import { ColumnsContainer } from './index.styles'

class Meetings extends Component {
  render() {
    console.log('meetings page')
    return (
      <BodyContainer>
        <ContentHeader title={'Meetings'} />
        <Container>
          <ColumnsContainer>
            <MeetingColumn date={'12 Aprile, Monday'} />
            <MeetingColumn date={'17 Aprile, Friday'} />
            <MeetingColumn date={'20 Aprile, Monday'} />
            <MeetingColumn date={'25 Aprile, Thursday'} />
            <MeetingColumn date={'26 Aprile, Friday'} />
          </ColumnsContainer>
        </Container>
      </BodyContainer>
    )
  }
}

export default Meetings;