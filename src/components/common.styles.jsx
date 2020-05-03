import styled from 'styled-components'
export const BodyContainer = styled.div`
  display:flex;
  max-width: 100%;
  height: 93%;
  flex-direction: column;
  padding: ${(props)=>props.isInChates ? '0' : '5px 15px'};
  box-sizing: border-box;
`;

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  background: #F0F2F5;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${props => props.width};
  width: ${props => props.width};
  height: 95%;
  margin-right: 10px;
  border: ${props => props.isDraggingOver ? '2px dashed purple' : '1px solid #AEABAB'};
  border-radius: 5px;
  padding: 8px;
  user-select: none;
  background: #E6E7E9;
`

export const ScrollAbleContainer = styled.div`
  overflow-y: auto;
`
