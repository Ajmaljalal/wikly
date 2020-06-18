import styled from 'styled-components'
const Container = styled.div`
  display:flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ImageHolder = styled.div`
  width: 55%;
  min-width: 310px;
  background: url('https://picsum.photos/id/57/900');
  background-repeat: no-repeat;
  background-size: cover;
`

export const AuthStyles = {
  Container,
  ImageHolder
}