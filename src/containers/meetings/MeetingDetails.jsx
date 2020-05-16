import React, { PureComponent } from 'react'
import { getTimeFromDate } from '../../helpers/getDate'

import {
  Container,
  CloseButton,
  MeetingTitle,
  ContainerHeader,
  MeetingTime,
  DetialsContainer,
  Options,
  Tab,
  TabItem,
  TabItemDetails
} from './meetingDetails.styles'

import closeIcon from '../../assets/icons/close.svg'
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
    return (
      <Container>
        {this.renderTitleAndCloseButton(meeting.title)}
        <MeetingTime>{getTimeFromDate(meeting.startTime)} - {getTimeFromDate(meeting.endTime)}</MeetingTime>
        <Options>
          Manage meeting
          <img src={arrowDownIcon} alt='arrow-down'/>
        </Options>
        {this.renderMeetingDetails(meeting)}
      </Container>
    )
  }

  renderTitleAndCloseButton = (title) => {
    const { onClose } = this.props
    return (
      <ContainerHeader>
        <MeetingTitle>{title}</MeetingTitle>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt='close-icon' />
        </CloseButton>
      </ContainerHeader>
    )
  }

  renderMeetingDetails = (meeting) => {
    return (
      <DetialsContainer>
        <Tab>
          <TabItem htmlFor='agenda' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('agenda')}>Agenda ({meeting.agenda})</TabItem>
          <TabItem htmlFor='notes' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('notes')}>Notes ({meeting.notes})</TabItem>
          <TabItem htmlFor='resources' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('resources')}>Resources ({meeting.attachments})</TabItem>
          <TabItem htmlFor='invitees' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('invitees')}>Invitees ({meeting.invitees})</TabItem>
        </Tab>
        {this.renderTabItemDetails()}
      </DetialsContainer>
    )
  }

  renderTabItemDetails = () => {
    const { currentTab } = this.state
    return (
      <TabItemDetails>
        {currentTab}
      </TabItemDetails>
    )
  }
}

