import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTimeFromDate } from "../../helpers/getDate";
import UploadAndSearch from "./UploadAndSearch";
import { AgendaStyles } from "./assets/styles/agenda.styles";

class Agenda extends React.Component {

  state = {
    searchPhrase: ''
  }

  onChangeSearchPhrase = (e) => {
    this.setState({
      searchPhrase: e.target.value
    })
  }
  render() {
    const { agenda } = this.props;
    const { searchPhrase } = this.state
    return (
      <Fragment>
        <UploadAndSearch
          btnText='Create agenda'
          searchPlaceholder='Search for agendas...'
          searchPhrase={searchPhrase}
          onChange={this.onChangeSearchPhrase}
        />
        <AgendaStyles.AgendaContainer>
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
        </AgendaStyles.AgendaContainer>
      </Fragment>
    );
  }
}

Agenda.propTypes = {
  agenda: PropTypes.array,
};

export default Agenda;
