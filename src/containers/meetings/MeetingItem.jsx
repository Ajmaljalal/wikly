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
    const { meeting } = this.props
    return (
      <Fragment>
        <MeetingContainer onClick={this.toggleMeetingDetailsModal}>
            {this.renderHeader(meeting.dateTime)}
            <MeetingTitle>
                {meeting.title}
            </MeetingTitle>
            {this.renderFooter(meeting)}
        </MeetingContainer>
        {openMeetingDetails ? <MeetingDetails onClose={this.toggleMeetingDetailsModal}/> : null}
      </Fragment>
      )
  }

  renderHeader = (meetingTime) =>{
    return (
      <MeetingHeader>
        <MeetingTime>
            {meetingTime}
        </MeetingTime>
        <MoreIconWrapper>
            <img src={horizontalMoreIcon} alt='more-icon'/>
        </MoreIconWrapper>
      </MeetingHeader>
    )
  }

  renderFooter = (meeting) => {
    return (
      <MeetingFooter>
        <FooterItem>
            <img src={participantsIcon} alt='participants-icon'/>
            {meeting.invitees}
        </FooterItem>
        <FooterItem>
          <img src={agendaIcon} alt='agenda-icon' /> 
          {meeting.agenda}
        </FooterItem>
        <FooterItem>
            <img src={attachIcon} alt='attachments-icon'/>
            {meeting.attachements}
        </FooterItem>
        <FooterItem>
            <img src={notesIcon} alt='notes-icon'/>
            {meeting.notes}
        </FooterItem>
      </MeetingFooter>
    )
  }
}

export default MeetingItem;
