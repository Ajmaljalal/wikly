import styled from 'styled-components'
const Container = styled.div`
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

const CreatNewOrg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 500px;
  padding: 42px 35px;
  box-shadow: 0px 0px 4px #ccc;
  border-radius: 8px;
  background: white;
  box-sizing: border-box;
  p {
    font-siz: 18px;
    margin: 5px;
    text-align: center;
  }
`;
const OrSeparator = styled.div`
  margin: 30px;
`

const Logo = styled.h1`
  margin: 3% 0;
`;

export const OrgStyles = {
  Container,
  Logo,
  CreatNewOrg,
  OrSeparator
}