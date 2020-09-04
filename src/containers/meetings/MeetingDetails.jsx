import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTimeFromDate, getTimeLeft } from '../../helpers/getDate'
import { 
  getOneMeeting,
  getMeetingAgenda,
  getMeetingNotes,
  getMeetingInvitees
 } from '../..//redux/meetings/actions'
import Agenda from './Agenda'
import Notes from './Notes'
import Invitees from './Invitees'
import { MeetingDetailsStyles } from './assets/styles/meetingDetails.styles'
// import arrowDownIcon from '../../assets/icons/caret-down.svg'

/**
 * @param {String} meetingId
 * @param {Function} onClose
 * @param {Function} getOneMeeting
 * @param {Function} getMeetingAgenda
 * @param {Function} getMeetingNotes
 * @param {Function} getMeetingInvitees
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
      meeting: null,
      unsubsribeFromMeeting: null
    }
  }

  async componentDidMount() {
    const { 
      getOneMeeting, 
      getMeetingAgenda, 
      getMeetingNotes, 
      getMeetingInvitees, 
      currentProject, 
      meetingId 
    } = this.props

    this.state.unsubsribeFromMeeting = await getOneMeeting(currentProject.projectId, meetingId)
    await getMeetingAgenda(meetingId)
    await getMeetingNotes(meetingId)
    await getMeetingInvitees(meetingId)
  }

  toggleCurrentTab = (currentTabName) => {
    this.setState({
      currentTab: currentTabName
    })
  }


  render() {
    const { meeting } = this.props
    if (!meeting) {
      return null
    }
    let status = meeting && `Starts ${getTimeLeft(meeting.startTime)}`
    let now = new Date()
    if (now > meeting.startTime.seconds * 1000) {
      status = 'In Progress'
    }
    if (now > meeting.endTime.seconds * 1000) {
      status = 'Meeting Ended'
    }
    return (
      meeting ? <MeetingDetailsStyles.Container>
        {this.renderTitleAndCloseButton(meeting.title)}
        <MeetingDetailsStyles.MeetingTime>{getTimeFromDate(meeting.startTime)} -
          {getTimeFromDate(meeting.endTime)} -
          <MeetingDetailsStyles.Status starts={status.includes('Starts') ? true : false}>{status.toUpperCase()}</MeetingDetailsStyles.Status>
        </MeetingDetailsStyles.MeetingTime>
        {/* <MeetingDetailsStyles.Options>
          Manage meeting
          <img src={arrowDownIcon} alt='arrow-down' />
        </MeetingDetailsStyles.Options> */}
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
    const { currentTab } = this.state
    switch(currentTab) {
      case 'agenda':
        return this.renderAgenda()
      case 'notes': 
        return this.renderNotes()
      case 'invitees':
        return this.renderInvitees()
      default:
        return 'null'
    } 
  }



  renderAgenda = () => {
    const { meetingAgenda } = this.props
    return(
      <MeetingDetailsStyles.TabItemDetails>
        <Agenda agenda={meetingAgenda} />
      </MeetingDetailsStyles.TabItemDetails>
    )
  }
  renderNotes = () => {
    const { meetingNotes } = this.props
    return(
      <MeetingDetailsStyles.TabItemDetails>
        <Notes notes={meetingNotes} />
      </MeetingDetailsStyles.TabItemDetails>
    )
  }

  renderInvitees = () => {
    const { meetingInvitees } = this.props
    return(
      <MeetingDetailsStyles.TabItemDetails>
        <Invitees invitees={meetingInvitees} />
      </MeetingDetailsStyles.TabItemDetails>
    )
  }
}


const mapStateToProps = ({ meetingsState, projectsState }) => {
  return {
    meetingAgenda: meetingsState.meeting_agenda,
    meetingNotes: meetingsState.meeting_notes,
    meetingInvitees: meetingsState.meeting_invitees,
    currentProject: projectsState.current_project,
    meeting: meetingsState.current_meeting,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOneMeeting: (projectId, meetingId) => dispatch(getOneMeeting(projectId, meetingId)),
    getMeetingAgenda: (meetingId) => dispatch(getMeetingAgenda(meetingId)),
    getMeetingNotes: (meetingId) => dispatch(getMeetingNotes(meetingId)),
    getMeetingInvitees: (meetingId) => dispatch(getMeetingInvitees(meetingId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MeetingDetails);


