import React, { memo }from 'react'
import {ContentHeaderContainer, HeaderTitle } from './content-header.styles'

function ContentHeader({title}) {
    return (
        <ContentHeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
        </ContentHeaderContainer>
    )
}

export default memo(ContentHeader);
