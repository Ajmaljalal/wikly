import styled from 'styled-components'
export const MeetingContainer = styled.div`
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
  transition: all .5s;
  cursor: pointer;
  &:hover{
    border: 1px solid purple;
    box-shadow: 0px 0px 8px grey;
  }
`;

export const MeetingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
`

export const MeetingTime = styled.div`
  font-size: 12px;
  color: grey;
`
export const MoreIconWrapper = styled.div`
  img {
    min-width: 20px;
  }
`

export const MeetingTitle = styled.div`
  min-width: 100%;
  font-size: 14px;
`

export const MeetingFooter = styled.div`
  display:flex;
  margin-top: 45px;
  justify-content: space-evenly;
`

export const FooterItem = styled.div`
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