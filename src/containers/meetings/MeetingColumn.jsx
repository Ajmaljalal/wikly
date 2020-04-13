import React from 'react'
import { MeetingsColumn, 
    MeetingsColumnHeader, 
    HeaderTitle, 
    HeaderIconsWrapper, 
    ActionButton,
    Divider
 } from './meetings.styles'

 import MeetingItem from './MeetingItem'

 import plusIcon from './assets/plus-icon.svg'
 import moreIcon from './assets/more-icon.svg'

export default function MeetingColumn({date}) {
    return (
        <MeetingsColumn>
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
            <MeetingItem />
            <MeetingItem />
            <MeetingItem />
        </MeetingsColumn>
    )
}
