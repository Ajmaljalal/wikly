import styled from 'styled-components'
import { Colors } from '../../../assets/colors';
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  2px 7px;
  box-sizing: border-box;
  width: 100%;
  min-height: 35px;
  background: #2a4865;
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
  margin: 0 1px 0 5px;
  font-size: 12px;
`;

const OrgLogoWrapper = styled.div`
  margin-left: 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    width: 25px;
  }
`;

const OrgLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  width: 165px;
    img {
      border-radius: 50%;
    }
    svg {
      margin-right: 2px;
      size: 12px;
    }
`;

const OrgName = styled.div`
    margin-left: 2px;
    font-size: 12px;

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
  OrgLogoWrapper,
  OrgLogo,
  OrgName,
  CurrentProject,
  ProjectSettings,
  ProjectTeam,
}