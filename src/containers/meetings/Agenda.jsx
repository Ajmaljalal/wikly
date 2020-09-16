import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTimeFromDate } from "../../helpers/getDate";
import { AgendaStyles } from "./assets/styles/agenda.styles";

const Agenda = ({ agenda }) => {
  return (
    <Fragment>
      {agenda &&
        agenda.map((agendaItem) => {
          return (
            <AgendaStyles.Container key={agendaItem.agendaId}>
              <AgendaStyles.Text>{agendaItem.text}</AgendaStyles.Text>
              <AgendaStyles.Speaker>
                {agendaItem.speaker.name}
              </AgendaStyles.Speaker>
              <AgendaStyles.Time>
                {getTimeFromDate(agendaItem.time)}
              </AgendaStyles.Time>
              <AgendaStyles.Duration>
                {agendaItem.duration}
              </AgendaStyles.Duration>
              <AgendaStyles.Actions>
                <FontAwesomeIcon icon="pencil-alt" color="grey" size="sm" />
                <FontAwesomeIcon icon="trash-alt" color="grey" size="sm" />
              </AgendaStyles.Actions>
            </AgendaStyles.Container>
          );
        })}
    </Fragment>
  );
};

Agenda.propTypes = {
  agenda: PropTypes.array,
};

export default Agenda;
