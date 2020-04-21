import React from 'react'
import {  
    MeetingsColumnHeader, 
    HeaderTitle, 
    HeaderIconsWrapper, 
    ActionButton,
    Divider
 } from './meetings.styles'
 import { Column } from '../../components/common.styles'

 import MeetingItem from './MeetingItem'

 import plusIcon from './assets/plus-icon.svg'
 import moreIcon from './assets/more-icon.svg'

export default function MeetingColumn({date}) {
    return (
        <Column width={'278px'}>
            <MeetingsColumnHeader>
                <HeaderTitle>{date}</HeaderTitle>
                <HeaderIconsWrapper>
                    <ActionButton>
                        <img src={plusIcon}/>
                    </ActionButton>
                    <ActionButton>
                        <img src={moreIcon}/>
                    </ActionButton>
                </HeaderIconsWrapper>
            </MeetingsColumnHeader>
            <Divider />
            <MeetingItem meetingId={1} />
            <MeetingItem meetingId={2} />
            <MeetingItem meetingId={3}/>
        </Column>
    )
}
