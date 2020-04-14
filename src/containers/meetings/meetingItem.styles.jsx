import styled from 'styled-components'
export const ItemContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  min-height: 150px;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid transparent;
  transition: box-shadow .5s;
  cursor: pointer;
  &:hover{
    border: .5px solid black;
    box-shadow: 4px 4px 4px grey;
  }
`;

export const MeetingItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 5px;
  width: 100%;
  height: 25px;
`

export const MeetingTime = styled.div`
  font-size: 12px;
  color: grey;
`
export const MoreIconWrapper = styled.div`
  img {
    min-width: 20px;
    min-height: 20px;
  }
`

export const MeetingTitle = styled.div`
  min-width: 100%;
  font-weight: 600;
`

export const MeetingFooterWrapper = styled.div`
  display:flex;
  margin-top: 45px;
  justify-content: space-evenly;
`

export const MeetingFooterItem = styled.div`
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