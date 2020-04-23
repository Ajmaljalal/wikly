import styled from 'styled-components'
export const TaskContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  min-height: 130px;
  max-height: 130px;
  box-sizing: border-box;
  padding: 5px 8px;
  cursor: pointer;
  user-select: none;
`;


export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
`

export const TaskCategory = styled.div`
  font-size: 12px;
  color: grey;
`
export const MoreIcon = styled.div`
  img {
    min-width: 20px;
    min-height: 20px;
  }
`
export const TaskBody = styled.div`
  min-width: 100%;
  min-height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TaskTitle = styled.div`
  overflow: hidden;
  max-height: 55px;
  font-size: 14px;
`

export const TaskFooter = styled.div`
  display:flex;
  justify-content: space-evenly;
  height: 20px;
`

export const TaskFooterItem = styled.div`
  font-size: 10px;
  margin-right: 15px;
  display:flex;
  align-items: flex-end;
  cursor: pointer;
  img {
    width: 18px;
    margin-right: 3px;
  }
`