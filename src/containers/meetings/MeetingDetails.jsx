import React, { Component } from 'react'

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

export default class MeetingDetails extends Component {

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
    return (
      <Container>
        {this.renderTitleAndCloseButton()}
        <MeetingTime>11:00AM - 12:30PM</MeetingTime>
        <Options>
          Manage meeting
          <img src={arrowDownIcon}/>
        </Options>
        {this.renderMeetingDetails()}
      </Container>
    )
  }

  renderTitleAndCloseButton = () => {
    const { onClose } = this.props
    return (
      <ContainerHeader>
        <MeetingTitle>Team Building meeting with new hires.This is the first meeting.</MeetingTitle>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt='close icon' />
        </CloseButton>
      </ContainerHeader>
    )
  }

  renderMeetingDetails = () => {
    return (
      <DetialsContainer>
        <Tab>
          <TabItem for='agenda' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('agenda')}>Agenda</TabItem>
          <TabItem for='notes' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('notes')}>Notes</TabItem>
          <TabItem for='resources' currentTab={this.state.currentTab} onClick={()=>this.toggleCurrentTab('resources')}>Resources(3)</TabItem>
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

