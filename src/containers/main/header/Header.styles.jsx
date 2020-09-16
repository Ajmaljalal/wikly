import styled from 'styled-components'
import { Colors } from '../../../assets/colors';
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

const UserName = styled.div`
  margin-left: 5px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const CurrentProject = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  padding: 7px;
  border: .5px solid transparent;
    &:hover {
    border: .5px solid ${Colors["wikli-color-white-alpha-30"]};
  }
  &::after {
    content: ">";
    display: block;
    font-weight: 900;
    margin-left: 5px;
    font-size: 14px;
    transform:rotate(90deg); 
    -webkit-transform:rotate(90deg);
    -o-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    width: 7px;
    cursor: pointer;
    color: gray
  }
`;

const ProjectSettings = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  border: .5px solid transparent;
  padding: 7px;
  &:hover {
    border: .5px solid ${Colors["wikli-color-white-alpha-30"]};
  }
  &::after {
    content: "⚙️";
    display: block;
    margin-left: 3px;
    cursor: pointer;
}
`;

const ProjectTeam = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  border: .5px solid transparent;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  padding: 7px;
  &:hover {
    border: .5px solid ${Colors["wikli-color-white-alpha-30"]};
  }
  &::after {
    content: ">";
    display: block;
    font-weight: 900;
    margin-left: 5px;
    font-size: 14px;
    transform:rotate(90deg); 
    -webkit-transform:rotate(90deg);
    -o-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    width: 7px;
    text-align: center;
    cursor: pointer;
    color: grey;

  }
`;

export const HeaderStyles = {
  HeaderContainer,
  UserAvatarWrapper,
  UserName,
  Left,
  CurrentProject,
  ProjectSettings,
  ProjectTeam,
}