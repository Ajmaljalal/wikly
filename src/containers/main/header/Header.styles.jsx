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
  // border-bottom: 0.5px solid gray;
  box-shadow: 0px 1px 4px lightgray;
`;

const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 7px;
  cursor: pointer;
  color: white;
  padding: 3px 10px;
  &:hover{
    border-radius: 5px;
    background: #476282;
  }
`;

export const HeaderStyles = {
  HeaderContainer,
  UserAvatarWrapper,
}