import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/button/Button'
import NullState from '../../components/null-state';
import { Colors } from '../../assets/colors'
import nullIcon from './assets/images/nullIcon.svg'

function NullMeetings({onClick}) {
    const button =
    <Button
      color='white'
      bgColor={Colors["wikli-color-primary-dark"]}
      onClick={onClick}
    >
      <FontAwesomeIcon icon='plus' color='white' />
      <span>Add Meeting</span>
    </Button>
  const text = 'No meetings sheduled for you. Please schedule a meeting now.'
  return (
      <NullState button={button} text={text} icon={nullIcon}/>
  )
}

export default memo(NullMeetings)
