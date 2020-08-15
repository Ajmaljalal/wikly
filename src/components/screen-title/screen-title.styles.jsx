import styled from 'styled-components'
import { Colors } from '../../assets/colors'
export const ContentHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  text-transform: sentenceCase;
  color: ${Colors["theme-color-fg-primary"]}
`;