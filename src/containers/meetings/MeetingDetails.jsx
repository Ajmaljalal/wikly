import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTimeFromDate, getTimeLeft } from '../../helpers/getDate'
import { getOneMeeting } from '../..//redux/meetings/actions'

import { MeetingDetailsStyles } from './meetingDetails.styles'
import arrowDownIcon from '../../assets/icons/caret-down.svg'


/**
 * @param {Function} onClose
 * @param {String} meetingId
 * @param {Fucntion} getOneMeeting
 * @param {Object} meetingAgenda
 * @param {Object} meetingNotes
 * @param {Object} meetingInvitees
 * @param {Object} currentProject
 */
class MeetingDetails extends PureComponent {

  constructor() {
    super()
    this.state = {
      currentTab: 'agenda',
      meeting: null
    }
  }

  async componentDidMount() {
    const { getOneMeeting, currentProject, meetingId } = this.props
    await getOneMeeting(currentProject.projectId, meetingId)
  }

  toggleCurrentTab = (currentTabName) => {
    this.setState({
      currentTab: currentTabName
    })
  }


  render() {
    const { meeting } = this.props
    if (!meeting) {
      return
    }
    let status = meeting && `Starts ${getTimeLeft(meeting.startTime)}`
    let now = new Date()
    if (now > meeting.startTime) {
      status = 'In Progress'
    }
    if (now > meeting.endTime) {
      status = 'Meeting Ended'
    }
    return (
      meeting ? <MeetingDetailsStyles.Container>
        {this.renderTitleAndCloseButton(meeting.title)}
        <MeetingDetailsStyles.MeetingTime>{getTimeFromDate(meeting.startTime)} -
          {getTimeFromDate(meeting.endTime)} -
          <MeetingDetailsStyles.Status starts={status.includes('Starts') ? true : false}>{status.toUpperCase()}</MeetingDetailsStyles.Status>
        </MeetingDetailsStyles.MeetingTime>
        <MeetingDetailsStyles.Options>
          Manage meeting
          <img src={arrowDownIcon} alt='arrow-down' />
        </MeetingDetailsStyles.Options>
        {this.renderMeetingDetails()}
      </MeetingDetailsStyles.Container> : null
    )
  }

  renderTitleAndCloseButton = (title) => {
    const { onClose } = this.props
    return (
      <MeetingDetailsStyles.ContainerHeader>
        <MeetingDetailsStyles.MeetingTitle>{title}</MeetingDetailsStyles.MeetingTitle>
        <MeetingDetailsStyles.CloseButton onClick={onClose}>
          <FontAwesomeIcon icon='times' />
        </MeetingDetailsStyles.CloseButton>
      </MeetingDetailsStyles.ContainerHeader>
    )
  }

  renderMeetingDetails = () => {
    const { meeting } = this.props
    return (
      <MeetingDetailsStyles.DetialsContainer>
        <MeetingDetailsStyles.Tab>
          <MeetingDetailsStyles.TabItem htmlFor='agenda' currentTab={this.state.currentTab} onClick={() => this.toggleCurrentTab('agenda')}>Agenda ({meeting.agenda})</MeetingDetailsStyles.TabItem>
          <MeetingDetailsStyles.TabItem htmlFor='notes' currentTab={this.state.currentTab} onClick={() => this.toggleCurrentTab('notes')}>Notes ({meeting.notes})</MeetingDetailsStyles.TabItem>
          <MeetingDetailsStyles.TabItem htmlFor='resources' currentTab={this.state.currentTab} onClick={() => this.toggleCurrentTab('resources')}>Resources ({meeting.attachments})</MeetingDetailsStyles.TabItem>
          <MeetingDetailsStyles.TabItem htmlFor='invitees' currentTab={this.state.currentTab} onClick={() => this.toggleCurrentTab('invitees')}>Invitees ({meeting.invitees})</MeetingDetailsStyles.TabItem>
        </MeetingDetailsStyles.Tab>
        {this.renderTabItemDetails()}
      </MeetingDetailsStyles.DetialsContainer>
    )
  }

  renderTabItemDetails = () => {
    const { meetingAgenda } = this.props
    const agenda = meetingAgenda && Object.keys(meetingAgenda).map(key => {
      return meetingAgenda[key]
    })
    return (
      <MeetingDetailsStyles.TabItemDetails>
        {agenda && agenda.map(agendaItem => {
          return <div key={agendaItem?.id}>{agendaItem?.text}</div>
        })}
      </MeetingDetailsStyles.TabItemDetails>
    )
  }
}


const mapStateToProps = ({ meetingsState, projectsState }) => {
  return {
    meetingAgenda: meetingsState.meeting_agenda,
    meetingNotes: meetingsState.meeting_notes,
    meetingInvitees: meetingsState.meeting_invitees,
    currentProject: projectsState.projects[0],
    meeting: meetingsState.current_meeting,

  }
}

const mapDispatchToProps = (disptach) => {
  return {
    getOneMeeting: (projectId, meetingId) => disptach(getOneMeeting(projectId, meetingId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingDetails);


