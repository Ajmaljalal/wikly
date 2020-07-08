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

const InvitedToOrgsList = styled.div`
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
`;

const InvitedToOrgItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F0F2F5;

  &:hover{
    border: 1px solid gray;
    cursor: pointer;

  }
`;

export const OrgStyles = {
  Container,
  Logo,
  CreatNewOrg,
  OrSeparator,
  InvitedToOrgsList,
  InvitedToOrgItem
}