import React from 'react'
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

export default function MeetingColumn({ date }) {
  return (
    <Column width={'18%'}>
      {renderColumnHeader(date)}
      <Divider />
      {renderColumnBody()}
    </Column>
  )
}

const renderColumnHeader = (date) => {
  return (
    <MeetingsColumnHeader>
    <HeaderTitle>{date}</HeaderTitle>
    <HeaderIconsWrapper>
      <ActionButton>
        <img src={plusIcon} />
      </ActionButton>
      <ActionButton>
        <img src={moreIcon} />
      </ActionButton>
    </HeaderIconsWrapper>
  </MeetingsColumnHeader>
  )
}

const renderColumnBody = () => {
  return (
    <ColumnBody>
      <MeetingItem meetingId={1} />
      <MeetingItem meetingId={2} />
      <MeetingItem meetingId={3} />
      <MeetingItem meetingId={3} />
      <MeetingItem meetingId={3} />
      <MeetingItem meetingId={3} />
    </ColumnBody>
  )
}

