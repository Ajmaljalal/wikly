import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import { NoteStyles } from "./assets/styles/notes.styles";

const Notes = ({ notes }) => {
  return (
    <NoteStyles.Container>
      {notes &&
        notes.map((noteItem) => {
          return (
            <div key={noteItem.noteId}>
              {noteItem.text}
              {noteItem.owner.name}
              <NoteStyles.Actions>
                <FontAwesomeIcon icon="pencil-alt" color="green" />
                <FontAwesomeIcon icon="trash-alt" color="red" />
              </NoteStyles.Actions>
              <h1>HI</h1>
            </div>
          );
        })}
    </NoteStyles.Container>
  );
};

Notes.propTypes = {
  notes: PropTypes.array,
};

export default Notes;
