import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createMeeting } from '../../redux/meetings/meetingsActions'
import { getCurrentWeek } from '../../helpers/getDate'
import { BodyContainer, Container } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'
import MeetingColumn from './MeetingColumn'
import { ColumnsContainer } from './index.styles'

class Meetings extends PureComponent {

  componentDidMount() {
    this.props.createNewMeeting({
      id: (Math.random()*1000+Math.random()*2000).toString(),
      agenda: 9,
      attachements: 3,
      date: new Date().toLocaleDateString(),
      startTime: new Date().toLocaleTimeString(),
      endTime: new Date().toLocaleTimeString(),
      invitees: 10,
      notes: 4,
      title: 'Should work on budget',
      recuring: true
    })
  }
  render() {
    return (
      <BodyContainer>
        <ContentHeader title={'Meetings'} />
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
    return week.map((date) => {
      return (
        <MeetingColumn key={date} date={date} meetings={meetings}/>
      )
    })
  }
}

const mapStateToProps = ({ firestore }) => {
  return {
    meetings: firestore.data.meetings
  }
}

const mapDispatchTProps = (disptach) => {
  return {
    createNewMeeting: (meeting) => disptach(createMeeting(meeting))
  }
}

export default compose(
  firestoreConnect((props) => [
    { collection: 'meetings'}
  ]),
  connect(mapStateToProps, mapDispatchTProps
))(Meetings);