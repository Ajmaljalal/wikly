import styled from 'styled-components'

export const ColumnsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    overflow-x: auto;
`;
export const TaskItemDraggingContainer = styled.div`
  margin-top: 10px;
  background: white;
  box-sizing: border-box;
  border: ${props => props.isDragging ? '1px dashed purple' : '1px solid transparent'};
  border-radius: 5px;
  &:hover{
    box-shadow: 0px 0px 8px grey;
  }
  transition: all .5s;
`;

export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 5px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;
export const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
`

export const HeaderIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end
  width: 30%;
`

export const ActionButton = styled.div`
  width: 20px;
  margin-left: 2px;
  cursor: pointer
`

export const ColumnBody = styled.div`
  width: 100%;
  max-height: 100%;
  box-sizing:border-box;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 2px;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
    border-radius: 5px;
  }
`;