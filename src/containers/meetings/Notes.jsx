import React from 'react'
import PropTypes from 'prop-types'

const Notes = ({ notes }) => {
  return (
    <div>
      {notes && notes.map(noteItem => {
        return <div key={noteItem.noteId}>{noteItem.text}</div>
      })}
    </div>
  )
}

Notes.propTypes = {
  notes: PropTypes.array
}

export default Notes
