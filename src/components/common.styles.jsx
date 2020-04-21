import styled from 'styled-components'
export const BodyContainer = styled.div`
  max-width: 100%;
  height: 90%;
  display:flex;
  flex-direction: column;
  padding: 5px 15px;
`;

export const Container = styled.div`
  display:flex;
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
  box-sizing: border-box;
  overflow:hidden;
  background: #E6E7E9;
  &:hover{
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
    border-radius: 5px;
  }
`
