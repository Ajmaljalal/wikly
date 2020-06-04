import styled from 'styled-components'
import bgImage from '../../../assets/bg-orgs.png'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background:  white url(${bgImage}) no-repeat center;
  // background-size: 100%;
  box-sizing: border-box;
  
  p {
    font-siz: 18px;
    margin: 10px;
  }
`;

export const OrgStyles = {
    Container,
}