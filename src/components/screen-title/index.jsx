import React, { memo }from 'react'
import {ContentHeaderContainer, HeaderTitle } from './screen-title.styles'

function ScreenTitle({title}) {
    return (
        <ContentHeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
        </ContentHeaderContainer>
    )
}

export default memo(ScreenTitle);
