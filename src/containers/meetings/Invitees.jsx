import React from 'react'
import PropTypes from 'prop-types'

const Invitees = ({ invitees }) => {
  return (
    <div>
      {invitees && invitees.map(invitee => {
        return <div key={invitee.inviteeId}>{invitee.name}</div>
      })}
    </div>
  )
}

Invitees.propTypes = {
  invitees: PropTypes.array
}

export default Invitees