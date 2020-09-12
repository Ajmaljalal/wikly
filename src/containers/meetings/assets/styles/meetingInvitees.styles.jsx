import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-left: 10px;
`;

const Avatar = styled.div`
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  margin-left: -12px;
  color: white;
  position: relative;
`;

const AddIcon = styled.div`
  transition: 0.5s background;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: dodgerblue;
    color: white;
  }
`;

export const InviteeStyles = {
  Avatar,
  Container,
  AddIcon,
};
