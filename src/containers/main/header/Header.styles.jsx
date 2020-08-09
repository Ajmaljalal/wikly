import styled from 'styled-components'
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  background: #2a4865;
  box-shadow: 0px 1px 8px lightgray;
`;

const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;

`;

export const HeaderStyles = {
  HeaderContainer,
  UserAvatarWrapper,
}