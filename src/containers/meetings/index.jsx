import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createMeeting } from '../../redux/meetings/meetingsActions'
import { getCurrentWeek } from '../../helpers/getDate'
import ContentHeader from '../../components/content-header/index'
import MeetingColumn from './MeetingColumn'
import Button from '../../components/button/Button'

import {
  BodyContainer,
  Container,
  Header,
} from '../../components/common.styles'
import {
  ColumnsContainer,
} from './index.styles'

class Meetings extends PureComponent {

  componentDidMount() {
    // this.props.createNewMeeting({
    //   id: (Math.random()*1000+Math.random()*2000).toString(),
    //   agenda: 9,
    //   attachements: 3,
    //   date: '5/12/2020',
    //   startTime: new Date().toLocaleTimeString(),
    //   endTime: new Date().toLocaleTimeString(),
    //   invitees: 10,
    //   notes: 4,
    //   title: 'Should work on budget',
    //   recuring: true
    // })
  }
  render() {
    console.log(this.props.meetings)
    return (
      <BodyContainer>
        <Header>
          <ContentHeader title={'Meetings'} />
          <Button color='#4a78cf'>Create a Meeting</Button>
        </Header>
        <Container>
          <ColumnsContainer>
            {this.renderColumns()}
          </ColumnsContainer>
        </Container>
      </BodyContainer>
    )
  }

  renderColumns = () => {
    const { meetings } = this.props
    const week = getCurrentWeek()
    // console.log(week)
    return week.map((date) => {
      return (
        <MeetingColumn key={date} date={date} meetings={meetings} />
      )
    })
  }
}

const mapStateToProps = ({ firestore }) => {
  return {
    meetings: firestore.data.currentProjectMeetings
  }
}

const mapDispatchTProps = (disptach) => {
  return {
    createNewMeeting: (meeting) => disptach(createMeeting(meeting))
  }
}

export default compose(
  firestoreConnect((props) =>
    [{
      collection: 'project-meetings',
      doc: 'SZMKZDDzduTEYipp47Ad',
      subcollections: [{ collection: 'meetings' }],
      storeAs: 'currentProjectMeetings'
    }]
  ),
  connect(mapStateToProps, mapDispatchTProps
  ))(Meetings);