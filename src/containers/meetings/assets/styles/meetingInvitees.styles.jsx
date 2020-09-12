import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-left: 10px;
`;

const Avatar = styled.div`
  position: relative;
  border: 2.5px solid #fff;
  border-radius: 50%;
  width: 31px;
  height: 31px;
  margin-left: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const AddIcon = styled.div`
  transition: 0.5s background;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 33px;
  height: 33px;
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
