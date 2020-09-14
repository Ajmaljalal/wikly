import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NoteStyles } from "./assets/styles/notes.styles";

const Notes = ({ notes }) => {
  return (
    <Fragment>
      {notes &&
        notes.map((noteItem) => {
          return (
            <NoteStyles.Container key={noteItem.noteId}>
              <div>
                <NoteStyles.Owner>{noteItem.owner.name}</NoteStyles.Owner>
                <NoteStyles.Text>{noteItem.text}</NoteStyles.Text>
              </div>
              <NoteStyles.Actions>
                <FontAwesomeIcon icon="pencil-alt" color="grey" size="sm" />
                <FontAwesomeIcon icon="trash-alt" color="grey" size="sm" />
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
