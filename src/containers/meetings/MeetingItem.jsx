import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react';
import { getTimeFromDate, getTimeLeft } from '../../helpers/getDate'
import MeetingDetails from './MeetingDetails'
import { MeetingItemStyles } from './meetingItem.styles'
import { Colors } from '../../assets/colors'


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
    if (!meeting) {
      return null
    }
    return (
      <Fragment>
        <MeetingItemStyles.MeetingContainer isFocused={openMeetingDetails}>
          {this.renderHeader(meeting.startTime, meeting.endTime)}
          {this.renderBody(meeting.title, meeting.scheduler, meeting.startTime, meeting.endTime, meeting.frequency)}
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

  renderBody = (title, scheduler, startTime, endTime, frequency) => {
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
        <MeetingItemStyles.MeetingTitle>
          {title}
          {this.renderRecurringIndicator(frequency)}
        </MeetingItemStyles.MeetingTitle>
        <MeetingItemStyles.MeetingHost>
            <span>By: {scheduler.name}</span>
            <MeetingItemStyles.Status starts={status.includes('Starts') ? true : false}>{status.toUpperCase()}</MeetingItemStyles.Status>
          </MeetingItemStyles.MeetingHost>
          
      </MeetingItemStyles.MeetinBody>
    )
  }

  renderRecurringIndicator = (frequency) => {
    if (frequency === 'recurring') {
      return (
        <Tippy content='Recurring meeting' className='tippy-tooltip'>
          <span><FontAwesomeIcon icon='sync' color={Colors.cyan} size='sm'/></span>
        </Tippy>
      )
    } else return null
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
