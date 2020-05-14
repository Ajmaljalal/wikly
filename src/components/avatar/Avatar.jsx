import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { AvatarStyles } from './avatar.styles'


function Avatar({ type, img, size, initials, status }) {
  let borderRadius
  let profile
  let background = '#'+Math.floor(Math.random()*16777215).toString(16)
  if (type === 'circle') {
    borderRadius = '50%'
  } else borderRadius = '5px'

  if (img) {
    profile = <img src={img} alt='user-avatar-image' />
  } else profile = initials

  return (
    <AvatarStyles.Container radius={borderRadius} size={size} backgroundColor={background}>
      <AvatarStyles.Avatar radius={borderRadius} size={size}>
        {profile}
      </AvatarStyles.Avatar>
      <AvatarStyles.Status status={status}/>
    </AvatarStyles.Container>
  )
}

Avatar.prototypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string,
  size: PropTypes.number.isRequired,
  initials: PropTypes.string,
  status: PropTypes.string.isRequired,
}

export default memo(Avatar)
