import React, { Fragment } from 'react'
import MeetingDetails from './MeetingDetails'
import {
  MeetingContainer,
  MeetingHeader,
  MeetingTime,
  MoreIconWrapper,
  MeetingTitle,
  FooterItem,
  MeetingFooter
} from './meetingItem.styles'
import participantsIcon from './assets/participants.svg'
import notesIcon from '../../assets/icons/notes.svg'
import attachIcon from '../../assets/icons/attach.svg'
import agendaIcon from './assets/agenda.svg'
import horizontalMoreIcon from '../../assets/icons/horizontal-more.svg'

class MeetingItem extends React.PureComponent {
    constructor(){
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

  render(){
    const { openMeetingDetails } = this.state
    return (
      <Fragment>
        <MeetingContainer onClick={this.toggleMeetingDetailsModal}>
            {this.renderHeader()}
            <MeetingTitle>
                {'Team building meeting with new hires. This is the first meeting.'}
            </MeetingTitle>
            {this.renderFooter()}
        </MeetingContainer>
        {openMeetingDetails ? <MeetingDetails onClose={this.toggleMeetingDetailsModal}/> : null}
      </Fragment>
      )
  }

  renderHeader = () =>{
    return (
      <MeetingHeader>
        <MeetingTime>
            {'11:00AM - 12:30PM'}
        </MeetingTime>
        <MoreIconWrapper>
            <img src={horizontalMoreIcon} alt='more-icon'/>
        </MoreIconWrapper>
      </MeetingHeader>
    )
  }

  renderFooter = () => {
    return (
      <MeetingFooter>
        <FooterItem>
            <img src={participantsIcon} alt='participants-icon'/>
            {'23'}
        </FooterItem>
        <FooterItem>
            <img src={agendaIcon} alt='agenda-icon'/>   
        </FooterItem>
        <FooterItem>
            <img src={attachIcon} alt='attachments-icon'/>
            {'2'}
        </FooterItem>
        <FooterItem>
            <img src={notesIcon} alt='notes-icon'/>
            {'12'}
        </FooterItem>
      </MeetingFooter>
    )
  }
}

export default MeetingItem;
