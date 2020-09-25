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

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 13%;
  width: 150px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const UserName = styled.div`
  margin-left: 5px;
`;


const CurrentProject = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  border: .5px solid transparent;
    &:hover {
    border: .5px solid ${Colors["wikli-color-white-alpha-30"]};
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
  &:hover {
    border: .5px solid ${Colors["wikli-color-white-alpha-30"]};
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
  &:hover {
    border: .5px solid ${Colors["wikli-color-white-alpha-30"]};
  }
`;

export const HeaderStyles = {
  HeaderContainer,
  Middle,
  Right,
  Left,
  UserName,
  CurrentProject,
  ProjectSettings,
  ProjectTeam,
}