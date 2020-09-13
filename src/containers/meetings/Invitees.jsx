import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import DropdownList from "../../components/dropdown-list/DropdownList";

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
      <InviteeStyles.Avatar style={{ background: "green" }}>
        +{invitees.length - imagesToShow}
      </InviteeStyles.Avatar>
    );
  } else {
    return null;
  }
};

const addInviteesButton = () => {
  const members = [
    {
      id: "f8bf518c-9285-4330-895a-afb36009020a",
      name: "Samara Macejkovic",
      initials: "SM",
      username: "Cindy.Jerde83",
      email: "Liliana.Hauck@hotmail.com",
    },
    {
      id: "ae086bcc-e601-47a6-9366-134f6388d015",
      name: "Rosalinda Hoeger",
      initials: "RH",
      username: "Oda.Jakubowski",
      email: "Cecelia_Schroeder@yahoo.com",
    },
  ];
  return (
    <InviteeStyles.AddInvitees>
      <DropdownList
        position="bottom"
        searchAble={true}
        closeOnClick={false}
        placeholder="Invite People to Meeting"
      >
        {members.map((member, index) => {
          return (
            <div key={index} style={{ margin: "5px" }}>
              {member.name}
            </div>
          );
        })}
      </DropdownList>
    </InviteeStyles.AddInvitees>
  );
};

Invitees.propTypes = {
  invitees: PropTypes.array,
};

export default Invitees;
