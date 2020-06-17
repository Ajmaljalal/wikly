import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  p {
    font-siz: 18px;
    margin: 5px;
  }
`;

const Logo = styled.h1`
  margin: 3% 0;
`;

export const OrgStyles = {
  Container,
  Logo,
}