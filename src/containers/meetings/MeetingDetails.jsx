import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTimeFromDate, getTimeLeft } from '../../helpers/getDate'

import { MeetingDetailsStyles } from './meetingDetails.styles'
import arrowDownIcon from '../../assets/icons/caret-down.svg'

export default class MeetingDetails extends PureComponent {

  constructor() {
    super()
    this.state = {
      currentTab: 'agenda',
    }
  }

  toggleCurrentTab = (currentTabName) => {
    this.setState({
      currentTab: currentTabName
    })
  }

  render() {
    const { meeting } = this.props
    let status = `Starts ${getTimeLeft(meeting.startTime)}`
    let now = new Date()
    if (now > meeting.startTime.toDate()) {
      status = 'In Progress'
    }
    if (now > meeting.endTime.toDate()) {
      status = 'Meeting Ended'
    }
    return (
      <MeetingDetailsStyles.Container>
        {this.renderTitleAndCloseButton(meeting.title)}
        <MeetingDetailsStyles.MeetingTime>{getTimeFromDate(meeting.startTime)} -
          {getTimeFromDate(meeting.endTime)} - 
          <MeetingDetailsStyles.Status starts={status.includes('Starts') ? true : false}>{status.toUpperCase()}</MeetingDetailsStyles.Status>
        </MeetingDetailsStyles.MeetingTime>
        <MeetingDetailsStyles.Options>
          Manage meeting
          <img src={arrowDownIcon} alt='arrow-down'/>
        </MeetingDetailsStyles.Options>
        {this.renderMeetingDetails(meeting)}
      </MeetingDetailsStyles.Container>
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

  renderMeetingDetails = (meeting) => {
    return (
      <MeetingDetailsStyles.DetialsContainer>
        <MeetingDetailsStyles.Tab>
          <MeetingDetailsStyles.TabItem htmlFor='agenda' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('agenda')}>Agenda ({meeting.agenda})</MeetingDetailsStyles.TabItem>
          <MeetingDetailsStyles.TabItem htmlFor='notes' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('notes')}>Notes ({meeting.notes})</MeetingDetailsStyles.TabItem>
          <MeetingDetailsStyles.TabItem htmlFor='resources' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('resources')}>Resources ({meeting.attachments})</MeetingDetailsStyles.TabItem>
          <MeetingDetailsStyles.TabItem htmlFor='invitees' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('invitees')}>Invitees ({meeting.invitees})</MeetingDetailsStyles.TabItem>
        </MeetingDetailsStyles.Tab>
        {this.renderTabItemDetails()}
      </MeetingDetailsStyles.DetialsContainer>
    )
  }

  renderTabItemDetails = () => {
    const { currentTab } = this.state
    return (
      <MeetingDetailsStyles.TabItemDetails>
        {currentTab}
      </MeetingDetailsStyles.TabItemDetails>
    )
  }
}

