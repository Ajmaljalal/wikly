import React, { Fragment } from 'react'
import { getTimeFromDate, getTimeLeft } from '../../helpers/getDate'
import MeetingDetails from './MeetingDetails'
import {
  MeetingContainer,
  MeetingHeader,
  MeetingTime,
  MoreIconWrapper,
  MeetinBody,
  MeetingTitle,
  MeetingHost,
  Status,
  FooterItem,
  MeetingFooter
} from './meetingItem.styles'
import participantsIcon from './assets/participants.svg'
import notesIcon from '../../assets/icons/notes.svg'
import attachIcon from '../../assets/icons/attach.svg'
import agendaIcon from './assets/agenda.svg'
import horizontalMoreIcon from '../../assets/icons/horizontal-more.svg'

class MeetingItem extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      openMeetingDetails: false,
    }
  }

  toggleMeetingDetailsModal = () => {
    this.setState({
      openMeetingDetails: !this.state.openMeetingDetails
    })
  }

  render() {
    const { openMeetingDetails } = this.state
    const { meeting } = this.props
    return (
      <Fragment>
        <MeetingContainer isFocused={openMeetingDetails}>
          {this.renderHeader(meeting.startTime, meeting.endTime)}
          {this.renderBody(meeting.title, meeting.scheduler, meeting.startTime, meeting.endTime)}
          {this.renderFooter(meeting)}
        </MeetingContainer>
        {openMeetingDetails ? <MeetingDetails onClose={this.toggleMeetingDetailsModal} meeting={meeting} /> : null}
      </Fragment>
    )
  }

  renderHeader = (startTime, endTime) => {
    return (
      <MeetingHeader>
        <MeetingTime>
          {getTimeFromDate(startTime)} - {getTimeFromDate(endTime)}
        </MeetingTime>
        <MoreIconWrapper onClick={()=>console.log('clicked')}>
          <img src={horizontalMoreIcon} alt='more-icon' />
        </MoreIconWrapper>
      </MeetingHeader>
    )
  }

  renderBody = (title, scheduler, startTime, endTime) => {
    let status = `Starts ${getTimeLeft(startTime)}`
    let now = new Date()
    if (now > startTime.toDate()) {
      status = 'In Progress'
    }
    if (now > endTime.toDate()) {
      status = 'Meeting Ended'
    }
    return (
      <MeetinBody onClick={this.toggleMeetingDetailsModal}>
        <MeetingTitle>{title}</MeetingTitle>
        <MeetingHost>
          <span>By: {scheduler.name}</span>
          <Status starts={status.includes('Starts') ? true : false}>{status.toUpperCase()}</Status>
        </MeetingHost>
      </MeetinBody>
    )
  }

  renderFooter = (meeting) => {
    return (
      <MeetingFooter>
        <FooterItem>
          <img src={participantsIcon} alt='participants-icon' />
          {meeting.invitees}
        </FooterItem>
        <FooterItem>
          <img src={agendaIcon} alt='agenda-icon' />
          {meeting.agenda}
        </FooterItem>
        <FooterItem>
          <img src={attachIcon} alt='attachments-icon' />
          {meeting.attachments}
        </FooterItem>
        <FooterItem>
          <img src={notesIcon} alt='notes-icon' />
          {meeting.notes}
        </FooterItem>
      </MeetingFooter>
    )
  }
}

export default MeetingItem;
