import React from 'react'
import moreIcon from './assets/more-icon.svg'
import {
    ItemContainer,
    MeetingItemHeader,
    MeetingTime,
    MoreIconWrapper,
    MeetingTitle,
    MeetingDetails,
    MeetingDetailsWrapper
} from './meetingItem.styles'
import participantsIcon from './assets/participants.svg'
import notesIcon from './assets/notes.svg'
import attachIcon from './assets/attach.svg'
import agendaIcon from './assets/agenda.svg'

export default function MeetingItem() {
    return (
        <ItemContainer>
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
            <MeetingDetailsWrapper>
                <MeetingDetails>
                    <img src={participantsIcon} alt='participants-icon'/>
                    {'23'}
                </MeetingDetails>
                <MeetingDetails>
                    <img src={agendaIcon} alt='agenda-icon'/>   
                </MeetingDetails>
                <MeetingDetails>
                    <img src={attachIcon} alt='attachments-icon'/>
                    {'2'}
                </MeetingDetails>
                <MeetingDetails>
                    <img src={notesIcon} alt='notes-icon'/>
                    {'12'}
                </MeetingDetails>
            </MeetingDetailsWrapper>
        </ItemContainer>
    )
}
