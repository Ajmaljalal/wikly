import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react';
import { getTimeFromDate, getTimeLeft } from '../../helpers/getDate'
import MeetingDetails from './MeetingDetails'
import { MeetingItemStyles } from './assets/styles/meetingItem.styles'
import { Colors } from '../../assets/colors'

/**
 * @param {Object} meeting
 */
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
        <MeetingItemStyles.MeetingContainer isFocused={openMeetingDetails} onClick={this.toggleMeetingDetailsModal}>
          {this.renderHeader(meeting.startTime, meeting.endTime)}
          {this.renderBody(meeting)}
          {/* {this.renderFooter(meeting)} */}
        </MeetingItemStyles.MeetingContainer>
        {openMeetingDetails ? <MeetingDetails onClose={this.toggleMeetingDetailsModal} meetingId={meeting.meetingId} /> : null}
      </Fragment>
    )
  }

  renderHeader = (startTime, endTime) => {
    return (
      <MeetingItemStyles.MeetingHeader>
        <MeetingItemStyles.MeetingTime>
          {getTimeFromDate(startTime)} - {getTimeFromDate(endTime)}
        </MeetingItemStyles.MeetingTime>
        <MeetingItemStyles.MoreIconWrapper onClick={() => console.log('clicked')}>
          <FontAwesomeIcon icon='ellipsis-v' />
        </MeetingItemStyles.MoreIconWrapper>
      </MeetingItemStyles.MeetingHeader>
    )
  }

  renderBody = (meeting) => {
    let status = `Starts ${getTimeLeft(meeting.startTime)}`
    let now = new Date()
    if (now > meeting.startTime.seconds * 1000) {
      status = 'In Progress'
    }
    if (now > meeting.endTime.seconds * 1000) {
      status = 'Ended'
    }
    return (
      <MeetingItemStyles.MeetinBody>
        <MeetingItemStyles.MeetingTitle>{meeting.title}</MeetingItemStyles.MeetingTitle>
        {this.renderRecurringIndicator(meeting.frequency, meeting.repeatEvery)}
        <MeetingItemStyles.MeetingHost>
          <span>By: {meeting.scheduler.name}</span>
          <MeetingItemStyles.Status starts={status.includes('Starts') ? true : false}>{status.toUpperCase()}</MeetingItemStyles.Status>
        </MeetingItemStyles.MeetingHost>
      </MeetingItemStyles.MeetinBody>
    )
  }

  renderRecurringIndicator = (frequency, repeatEvery) => {
    if (frequency === 'recurring') {
      return (
        <Tippy content={`Recurring meeting (every ${repeatEvery})`} className='tippy-tooltip'>
          <MeetingItemStyles.Frequency><FontAwesomeIcon icon='sync-alt' color={Colors["wikli-color-caution"]} size='sm' /></MeetingItemStyles.Frequency>
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
        <FontAwesomeIcon icon={iconText} size='lg' />
        {item}
      </MeetingItemStyles.FooterItem>
    )
  }
}

export default MeetingItem;
