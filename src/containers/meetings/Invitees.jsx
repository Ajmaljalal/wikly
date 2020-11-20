import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import Avatar from "../../components/avatar/Avatar";
import MembersList from './../../components/members/index';
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
            return renderInviteeAvatar(invitee, index);
          }
        })}
      {remainingInviteesNumber(invitees, imagesToShow)}
      {addInviteesButton()}
    </InviteeStyles.Container>
  );
};

const renderInviteeAvatar = (invitee, index) => {
  return (
    <Tippy
      placement="bottom"
      content={invitee.name}
      className="tippy-tooltip"
      key={index}
    >
      <InviteeStyles.Avatar>
        <Avatar
          key={invitee.inviteeId}
          type="circle"
          img={invitee.photoUrl}
          size="30px"
          initials={invitee.initials}
        />
      </InviteeStyles.Avatar>
    </Tippy>
  );
};

const remainingInviteesNumber = (invitees, imagesToShow) => {
  if (invitees && invitees.length >= imagesToShow) {
    return (
      <InviteeStyles.Avatar style={{ background: "green", marginRight: '3px'}}>
        +{invitees.length - imagesToShow}
      </InviteeStyles.Avatar>
    );
  } else {
    return null;
  }
};

const addInviteesButton = () => {
  return (
    <InviteeStyles.AddInvitees>
      <MembersList placeholder='Invite people' />
    </InviteeStyles.AddInvitees>
  );
};

Invitees.propTypes = {
  invitees: PropTypes.array,
};

export default Invitees;
