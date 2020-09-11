import React from "react";
import PropTypes from "prop-types";

import Avatar from "../../components/avatar/Avatar";

import { InviteeStyles } from "./assets/styles/meetingInvitees.styles";

const Invitees = ({ invitees }) => {
  const imagesToShow = 7;
  return (
    <InviteeStyles.Container>
      {invitees &&
        invitees.map((invitee, index) => {
          if (index >= imagesToShow) {
            return null;
          } else {
            return (
              <InviteeStyles.Avatar>
                <Avatar
                  key={invitee.inviteeId}
                  type="circle"
                  img={invitee.photoUrl}
                  size="30px"
                  initials={invitee.initials}
                />
              </InviteeStyles.Avatar>
            );
          }
        })}
      {remainingInviteesNumber(invitees, imagesToShow)}
    </InviteeStyles.Container>
  );
};

const remainingInviteesNumber = (invitees, imagesToShow) => {
  if (invitees && invitees.length >= imagesToShow) {
    return (
      <InviteeStyles.Avatar style={{ background: "green" }}>
        +{invitees.length - imagesToShow}
      </InviteeStyles.Avatar>
    );
  } else {
    return null;
  }
};

Invitees.propTypes = {
  invitees: PropTypes.array,
};

export default Invitees;
