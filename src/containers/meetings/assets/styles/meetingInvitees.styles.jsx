import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const Avatar = styled.div`
  min-width: 33px;
  min-height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  margin-left: -12px;
  color: white;
  position: relative;

  &:nth-child(1){
    margin-left: 0;
  }
`;

const AddInvitees = styled.div`
`;

export const InviteeStyles = {
  Avatar,
  Container,
  AddInvitees,
};
