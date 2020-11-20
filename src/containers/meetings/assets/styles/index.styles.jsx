import styled from 'styled-components'
import { Colors } from '../../../../assets/colors'

export const ColumnsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
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
  width: 155px;
  font-size: 12px;
  color: ${Colors["wikli-color-primary-dark"]};
  border-radius: 3px;
  user-select: none;
  svg {
    color: ${Colors["wikli-color-primary-dark"]}
  }
`;

export const Next = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid transparent;
  &:hover{
    border: 1px solid ${Colors["wikli-color-primary-dark"]};
  }
`;

export const Previous = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid transparent;
  &:hover{
    border: 1px solid ${Colors["wikli-color-primary-dark"]};
  }
`;
