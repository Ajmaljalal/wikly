import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { AvatarStyles } from './avatar.styles'


function Avatar({ type, img, size, initials, status }) {
  const colors = ['#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A'];

  const numberFromText = (text) => {
    // numberFromText("AA");
    const charCodes = text
      .split('') // => ["A", "A"]
      .map(char => char.charCodeAt(0)) // => [65, 65]
      .join(''); // => "6565"
    return parseInt(charCodes, 10);
  }
  let borderRadius
  let profile
  let background = colors[numberFromText(initials) % colors.length];
  if (type === 'circle') {
    borderRadius = '50%'
  } else borderRadius = '5px'

  if (img) {
    profile = <img src={img} alt='user-avatar' />
  } else profile = initials

  return (
    <AvatarStyles.Container radius={borderRadius} size={size} backgroundColor={background}>
      <AvatarStyles.Avatar radius={borderRadius} size={size}>
        {profile}
      </AvatarStyles.Avatar>
      {status ? <AvatarStyles.Status status={status} /> : null}
    </AvatarStyles.Container>
  )
}

Avatar.prototypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string,
  size: PropTypes.number.isRequired,
  initials: PropTypes.string,
  status: PropTypes.string,
}

export default memo(Avatar)
