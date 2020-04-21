import styled from 'styled-components'
export const TaskItemDraggingContainer = styled.div`
  margin-top: 10px;
  background: white;
  box-sizing: border-box;
  border: ${props => props.isDragging ? '1px dashed purple' : '1px solid transparent'};
  border-radius: 5px;
  &:hover{
    // border: 1px solid purple;
    box-shadow: 0px 0px 8px grey;
  }
  transition: all .5s;
`

export const ColumnHeader = styled.div`
  // position: fixed;
  width: 230px;
`