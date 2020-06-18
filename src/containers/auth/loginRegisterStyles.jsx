import styled from 'styled-components'
const Container = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 45%;
  min-width: 310px;
  height: 100%;
`;

const InputsWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 310px;
  padding: 30px;
  padding-top: 50px;
  box-shadow: 0px 0px 4px gray;
  border-radius: 8px;
  background: white;
  min-height: 350px;
  transition: height 3s;
`;
const Separater = styled.div`
  margin-top: 30px;
`;

export const LoginRegisterStyles = {
  Container,
  InputsWrapper,
  Separater
}