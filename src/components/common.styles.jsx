import styled from 'styled-components'
import { Colors } from '../assets/colors'
export const BodyContainer = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: ${(props)=>props.isInChates ? '0' : '0 20px'};
  box-sizing: border-box;
  // border-top: 1px solid lightgrey;
  // border-left: 1px solid lightgrey;
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  user-select: none;
`;

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%; 
  background: ${Colors["theme-color-bg"]};
  box-sizing: border-box;
  overflow: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: ${props => props.width};
  height: 97%;
  max-height: 97%
  min-height: 97%;
  border: ${props => props.isDraggingOver ? '2px dashed purple' : `0.5px solid ${Colors["wikli-color-grey-400"]};`};
  border-radius: 8px;
  user-select: none;
  background: ${Colors["wikli-color-grey-200"]};
  box-sizing: border-box;
`

export const VerticalScrollAbleContainer = styled.div`
  overflow-y: auto;
  border-right: 3px solid transparent;
`
export const HorizontalScrollAbleContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`
