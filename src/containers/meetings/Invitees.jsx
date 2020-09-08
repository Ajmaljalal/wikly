import React from "react";
import PropTypes from "prop-types";

import Avatar from "../../components/avatar/Avatar";

const Invitees = ({ invitees }) => {
  return (
    <div>
      {invitees &&
        invitees.map((invitee) => {
          return (
            <Avatar
              key={invitee.inviteeId}
              type="circle"
              img={invitee.photoUrl}
              size="30px"
            />
          );
        })}
    </div>
  );
};

Invitees.propTypes = {
  invitees: PropTypes.array,
};

export default Invitees;
