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
  display: flex;
  align-items: center;
  width: 90%;
`
export const MoreIconWrapper = styled.div`
  background: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  padding: 3px;
  border-radius: 10px;
  img {
    width: 15px;
  }
`
export const MeetinBody = styled.div`
  min-height:95px;
  min-width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MeetingTitle = styled.div`
  height: 40px;
  max-height: 40px;
  font-size: 14px;
  overflow: hidden;
`
export const MeetingHost = styled.div`
  padding:3px;
  padding-bottom:3px;
  font-size: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;

`;
export const Scheduler = styled.div`
  font-size: 12px;
`;
export const Status = styled.div`
  font-weight: 500;
  color: ${(props) => props.starts ? '#74E113' : 'red'};
  margin-left: 5px;
  font-size: 10px;
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