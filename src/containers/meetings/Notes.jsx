import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import { NoteStyles } from "./assets/styles/notes.styles";

const Notes = ({ notes }) => {
  return (
    <Fragment>
      {notes &&
        notes.map((noteItem) => {
          return (
            <NoteStyles.Container key={noteItem.noteId}>
              <NoteStyles.Owner>{noteItem.owner.name}</NoteStyles.Owner>
              <br />
              <NoteStyles.Text>{noteItem.text}</NoteStyles.Text>
              <NoteStyles.Actions>
                <FontAwesomeIcon icon="pencil-alt" color="green" />
                <FontAwesomeIcon icon="trash-alt" color="red" />
              </NoteStyles.Actions>
            </NoteStyles.Container>
          );
        })}
    </Fragment>
  );
};

Notes.propTypes = {
  notes: PropTypes.array,
};

export default Notes;
