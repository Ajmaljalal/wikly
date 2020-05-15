import React, { memo } from 'react'
import moment from 'moment';
import { getTodayDate } from '../../helpers/getDate'
import {
  MeetingsColumnHeader,
  HeaderTitle,
  HeaderIconsWrapper,
  ActionButton,
  Divider,
  ColumnBody
} from './index.styles'
import { Column } from '../../components/common.styles'

import MeetingItem from './MeetingItem'

import plusIcon from '../../assets/icons/plus-icon.svg'
import moreIcon from '../../assets/icons/more-icon.svg'




function MeetingColumn({ date, meetings }) {
  const meetingsOnCurrentDate = []
  const today = getTodayDate()
  const title = date === today ? 'TODAY' : date
  let formatedDate = title
  if (title !== 'TODAY') {
    formatedDate = moment(title, "MM-DD-YY").format('LL')
  }

  if (meetings) {
    Object.keys(meetings).forEach(meetingId => {
      // console.log('dates', meetings[meetingId].date, date)
      if (meetings[meetingId].date === date) {
        meetingsOnCurrentDate.push(meetings[meetingId])
      }
    })
  }
  return (
    <Column width={'18%'}>
      {renderColumnHeader(formatedDate, title)}
      <Divider />
      <ColumnBody>
        {renderColumnBody(meetingsOnCurrentDate)}
      </ColumnBody>
    </Column>
  )
}

const renderColumnHeader = (formatedDate, title) => {
  return (
    <MeetingsColumnHeader>
      <HeaderTitle isToday={title === 'TODAY' ? true : false}>{formatedDate}</HeaderTitle>
      <HeaderIconsWrapper>
        <ActionButton>
          <img src={plusIcon} alt='add' />
        </ActionButton>
        <ActionButton>
          <img src={moreIcon} alt='more' />
        </ActionButton>
      </HeaderIconsWrapper>
    </MeetingsColumnHeader>
  )
}

const renderColumnBody = (meetingsOnCurrentDate) => {
  return meetingsOnCurrentDate.map(meeting => {
    return (
      <MeetingItem key={meeting.id} meeting={meeting} />
    )
  })
}

export default memo(MeetingColumn)


