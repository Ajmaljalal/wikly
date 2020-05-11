import styled from 'styled-components'
export const MeetingContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  min-width:130px; 
  min-height: 150px;
  max-height: 150px;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
  border: ${(props)=>props.isFocused ? '1px solid grey' : '1px solid transparent'};
  transition: all .5s;
  cursor: pointer;
  &:hover{
    border: 1px solid grey;
  }
`;

export const MeetingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
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

export const MeetinBody = styled.div`
  min-height:95px;
  min-width: 130px;
`;
export const MeetingTitle = styled.div`
  height: 40px;
  max-height: 40px;
  font-size: 14px;
  overflow: hidden;
`
export const HostAndTimeLeft = styled.div`
  background: rgba(255, 165, 0, 0.1);
  padding:3px;
  padding-bottom:3px;
  font-size: 10px;
  margin-top: 10px;
  border: 1px solid orange;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;
export const Scheduler = styled.div`
  font-size: 12px;
`;

export const MeetingFooter = styled.div`
  display:flex;
  justify-content: space-around;
`

export const FooterItem = styled.div`
  font-size: 10px;
  display:flex;
  align-items: flex-end;
  cursor: pointer;
  img {
    width: 15px;
    margin-right: 3px;
  }
`