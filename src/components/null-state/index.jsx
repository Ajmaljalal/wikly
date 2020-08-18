import React, { memo } from 'react'
import { NullStateStyles } from './nullState.styles'

function NullState({ icon, text, button }) {
  console.log(icon)
  return (
    <NullStateStyles.Container bgImag={icon}>
      {/* <NullStateStyles.Blur>
        <img src={icon} alt='no-meeting-icon' />
      </NullStateStyles.Blur> */}
      <NullStateStyles.Contents>
        {text}
        <div>{button}</div>
      </NullStateStyles.Contents>
    </NullStateStyles.Container>
  )
}

export default memo(NullState)
