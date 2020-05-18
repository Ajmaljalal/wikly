import styled from 'styled-components'
import { Colors } from '../../assets/colors'

export const ColumnsContainer = styled.div`
    width: 100%;
    height: 95%;
    max-height: 95%;
    min-height: 95%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: auto;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  font-size: 14px;
`;

export const NextPreviousWeek = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 70px;
  color: ${Colors.cyan};
  border-radius: 3px;
  svg {
    color: ${Colors.cyan}
  }
`;

export const Next = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.green};
  width: 20px;
  height: 20px;
  border-radius: 3px;
`;

export const Previous = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.green};
  width: 20px;
  height: 20px;
  border-radius: 3px;
`;
