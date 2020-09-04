import React, { memo } from 'react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTodayDate } from '../../helpers/getDate'
import { ColumnStyles } from './assets/styles/meetingColumn.styles'
import { Column } from '../../components/common.styles'

import MeetingItem from './MeetingItem'

/**
 * 
 * @param {Objec} meeting 
 * @param {String} day 
 * @param {String} date 
 */
const isMeetingInColumn = (meeting, day, date) => {
  let columnHeaderDate;
  if(date.includes(',')) {
    columnHeaderDate = date.slice(0, date.length-1)
  }
  if (
    meeting &&
    (meeting.date === columnHeaderDate ||
    (meeting.frequency === 'recurring' && meeting.repeatEvery === 'day' && meeting.date <= columnHeaderDate) ||
    (meeting.frequency === 'recurring' && meeting.repeatEvery === 'week' && meeting.repeatOn === day) || 
    (meeting.frequency === 'recurring' && meeting.repeatEvery === 'month' && meeting.date.split('/')[1] === columnHeaderDate.split('/')[1]))
  ) {
    return true
  } else return false
}

const MeetingColumn = ({ date, day, meetings, onAddMeeting }) => {
  const meetingsOnCurrentDate = []
  const today = getTodayDate()
  const title = date === today ? 'TODAY' : date
  let formatedDate = title
  if (title !== 'TODAY') {
    formatedDate = moment(title, "MM-DD-YY").format('LL')
  }
  if (meetings) {
    Object.keys(meetings).forEach(meetingId => {
      if (isMeetingInColumn(meetings[meetingId], day, date)) {
        meetingsOnCurrentDate.push(meetings[meetingId])
      }   
    })
  }
  return (
    <Column width={'19.5%'}>
      {renderColumnHeader(formatedDate, title, day, onAddMeeting)}
      <ColumnStyles.ColumnBody>
        {renderColumnBody(meetingsOnCurrentDate)}
      </ColumnStyles.ColumnBody>
    </Column>
  )
}

const renderColumnHeader = (formatedDate, title, day, onAddMeeting) => {
  return (
    <ColumnStyles.MeetingsColumnHeader>
      <ColumnStyles.HeaderTitle isToday={title === 'TODAY' ? true : false}>{day}, {formatedDate}</ColumnStyles.HeaderTitle>
      <ColumnStyles.HeaderIconsWrapper>
        <ColumnStyles.ActionButton onClick={onAddMeeting}>
          <FontAwesomeIcon icon='plus' size='xs'/>
        </ColumnStyles.ActionButton>
        <ColumnStyles.ActionButton>
          <FontAwesomeIcon icon='ellipsis-v' size='xs'/>
        </ColumnStyles.ActionButton>
      </ColumnStyles.HeaderIconsWrapper>
    </ColumnStyles.MeetingsColumnHeader>
  )
}

const renderColumnBody = (meetingsOnCurrentDate) => {
  const sortedMeetingsOnCurrentDate = meetingsOnCurrentDate.sort((a, b) => {
    return a.startTime - b.startTime
  })
  return sortedMeetingsOnCurrentDate && sortedMeetingsOnCurrentDate.map(meeting => {
    return (
      <MeetingItem key={meeting.meetingId} meeting={meeting} />
    )
  })
}

export default memo(MeetingColumn)


