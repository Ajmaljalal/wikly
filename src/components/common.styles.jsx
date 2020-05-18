import styled from 'styled-components'
export const BodyContainer = styled.div`
  display:flex;
  width: 96.7%;
  height: 94.5%;
  flex-direction: column;
  padding: ${(props)=>props.isInChates ? '0' : '0 15px'};
  box-sizing: border-box;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
`;

export const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 95%; 
  max-height: 95%;
  background: #F0F2F5;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: ${props => props.width};
  height: 98%;
  max-height: 98%;
  min-height: 98%;
  border: ${props => props.isDraggingOver ? '2px dashed purple' : '1px solid #AEABAB'};
  border-radius: 5px;
  user-select: none;
  background: #E6E7E9;
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
