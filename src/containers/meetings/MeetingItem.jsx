import React, { Fragment } from 'react'
import MeetingDetails from './MeetingDetails'
import {
  ItemContainer,
  MeetingItemHeader,
  MeetingTime,
  MoreIconWrapper,
  MeetingTitle,
  MeetingFooterItem,
  MeetingFooterWrapper
} from './meetingItem.styles'
import participantsIcon from './assets/participants.svg'
import notesIcon from './assets/notes.svg'
import attachIcon from './assets/attach.svg'
import agendaIcon from './assets/agenda.svg'
import moreIcon from './assets/more-icon.svg'

class MeetingItem extends React.PureComponent {
  constructor(){
      super()
      this.state = {
          openMeetingDetails: false,
      }
  }

  toggleMeetinDetailsModal = () => {
    this.setState({
        openMeetingDetails: !this.state.openMeetingDetails
    })
  }

  render(){
    const { openMeetingDetails } = this.state
    const { meetingId } = this.props;
    return (
      <Fragment>
        <ItemContainer onClick={this.toggleMeetinDetailsModal}>
            <MeetingItemHeader>
                <MeetingTime>
                    {'11:00AM - 12:30PM'}
                </MeetingTime>
                <MoreIconWrapper>
                    <img src={moreIcon} alt='more-icon'/>
                </MoreIconWrapper>
            </MeetingItemHeader>
            <MeetingTitle>
                {'Team building meeting with new hires. This is the first meeting.'}
            </MeetingTitle>
            <MeetingFooterWrapper>
              <MeetingFooterItem>
                  <img src={participantsIcon} alt='participants-icon'/>
                  {'23'}
              </MeetingFooterItem>
              <MeetingFooterItem>
                  <img src={agendaIcon} alt='agenda-icon'/>   
              </MeetingFooterItem>
              <MeetingFooterItem>
                  <img src={attachIcon} alt='attachments-icon'/>
                  {'2'}
              </MeetingFooterItem>
              <MeetingFooterItem>
                  <img src={notesIcon} alt='notes-icon'/>
                  {'12'}
              </MeetingFooterItem>
            </MeetingFooterWrapper>
        </ItemContainer>
        {openMeetingDetails ? <MeetingDetails onClose={this.toggleMeetinDetailsModal}/> : null}
      </Fragment>
      )
  }
}

export default MeetingItem;
