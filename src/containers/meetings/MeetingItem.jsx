import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTimeFromDate, getTimeLeft } from '../../helpers/getDate'
import MeetingDetails from './MeetingDetails'
import { MeetingItemStyles } from './meetingItem.styles'

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
        <MeetingItemStyles.MeetingContainer isFocused={openMeetingDetails}>
          {this.renderHeader(meeting.startTime, meeting.endTime)}
          {this.renderBody(meeting.title, meeting.scheduler, meeting.startTime, meeting.endTime)}
          {this.renderFooter(meeting)}
        </MeetingItemStyles.MeetingContainer>
        {openMeetingDetails ? <MeetingDetails onClose={this.toggleMeetingDetailsModal} meeting={meeting} /> : null}
      </Fragment>
    )
  }

  renderHeader = (startTime, endTime) => {
    return (
      <MeetingItemStyles.MeetingHeader>
        <MeetingItemStyles.MeetingTime>
          {getTimeFromDate(startTime)} - {getTimeFromDate(endTime)}
        </MeetingItemStyles.MeetingTime>
        <MeetingItemStyles.MoreIconWrapper onClick={()=>console.log('clicked')}>
          <FontAwesomeIcon icon='ellipsis-v' />
        </MeetingItemStyles.MoreIconWrapper>
      </MeetingItemStyles.MeetingHeader>
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
      <MeetingItemStyles.MeetinBody onClick={this.toggleMeetingDetailsModal}>
        <MeetingItemStyles.MeetingTitle>{title}</MeetingItemStyles.MeetingTitle>
        <MeetingItemStyles.MeetingHost>
          <span>By: {scheduler.name}</span>
          <MeetingItemStyles.Status starts={status.includes('Starts') ? true : false}>{status.toUpperCase()}</MeetingItemStyles.Status>
        </MeetingItemStyles.MeetingHost>
      </MeetingItemStyles.MeetinBody>
    )
  }

  renderFooter = (meeting) => {
    return (
      <MeetingItemStyles.MeetingFooter>
        {this.renderFooterItem('users', meeting.invitees)}
        {this.renderFooterItem('clipboard', meeting.agenda)}
        {this.renderFooterItem('paperclip', meeting.attachments)}
        {this.renderFooterItem('sticky-note', meeting.notes)}
      </MeetingItemStyles.MeetingFooter>
    )
  }

  renderFooterItem = (iconText, item) => {
    return (
      <MeetingItemStyles.FooterItem>
        <FontAwesomeIcon icon={iconText} size='lg'/>
        {item}
      </MeetingItemStyles.FooterItem>
    )
  }
}

export default MeetingItem;
