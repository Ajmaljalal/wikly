import styled from 'styled-components'
import { Colors } from '../../assets/colors'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  margin: auto 0;
  color: ${Colors["theme-color-fg-disabled"]};
  user-select: none;
  position: relative;
  img {
    filter: blur(8px);
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  div {
    margin-top: 15px;
  }

`;

const Blur = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  ali
`;

export const NullStateStyles = {
  Container,
  Contents,
  Blur
}