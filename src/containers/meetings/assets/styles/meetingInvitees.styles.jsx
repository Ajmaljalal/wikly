import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 12px;
`;

const Avatar = styled.div`
  position: relative;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  margin-left: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const InviteeStyles = {
  Avatar,
  Container,
};
