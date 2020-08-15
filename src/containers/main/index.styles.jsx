import styled from 'styled-components'
import { Colors } from '../../assets/colors'
export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display:flex;
  flex-direction: column;
  background: ${Colors["theme-color-bg"]};;
  overflow: visible;
  position: relative;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  width: 100%; 
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`