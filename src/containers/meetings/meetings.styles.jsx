import styled from 'styled-components'

export const MeetingsColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 5px;
  width: 100%;
`
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

export const Divider = styled.div`
  min-height: 5px;
  width: 50%;
  background: purple;
  border-radius: 5px;
  margin-bottom: 5px;
`