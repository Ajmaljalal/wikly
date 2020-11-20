import styled from 'styled-components'
const MeetingContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  min-width:130px; 
  max-height: 150px;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
  padding-left: 8px;
  border: ${(props) => props.isFocused ? '1px solid grey' : '1px solid transparent'};
  transition: all .5s;
  cursor: pointer;
  &:hover{
    border: 1px solid grey;
  }
`;

const MeetingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
`;
const MeetingTime = styled.div`
  font-size: 12px;
  color: grey;
  display: flex;
  align-items: center;
  width: 90%;
`;
const MoreIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50%;
  &:hover {
    background: #F0F2F5;
  }
  svg {
    font-size: 12px;
    width: 15px;
  }
`;
const MeetinBody = styled.div`
  min-width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MeetingTitle = styled.div`
  min-height: 20px;
  max-height: 55px;
  font-size: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Frequency = styled.div`
  width: 14px;
`;
const MeetingHost = styled.div`
  padding:3px 0;
  font-size: 10px;
  margin-bottom: 8px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;

`;
const Scheduler = styled.div`
  font-size: 12px;
`;
const Status = styled.div`
  font-weight: 500;
  color: ${(props) => props.starts ? '#74E113' : 'red'};
  margin-right: 5px;
  font-size: 10px;
`;

const MeetingFooter = styled.div`
  display:flex;
  justify-content: space-around;
`;
const FooterItem = styled.div`
  font-size: 10px;
  display:flex;
  align-items: flex-end;
  cursor: pointer;
  svg {
    font-size: 14px;
    width: 15px;
    margin-right: 3px;
  }
`;

export const MeetingItemStyles = {
  MeetingContainer,
  MeetingHeader,
  MeetingTime,
  MoreIconWrapper,
  MeetinBody,
  MeetingTitle,
  Frequency,
  MeetingHost,
  Scheduler,
  Status,
  FooterItem,
  MeetingFooter
}