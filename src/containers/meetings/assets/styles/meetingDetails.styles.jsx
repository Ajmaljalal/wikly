import styled from "styled-components";
import { Colors } from "../../../../assets/colors";
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 50vw;
  height: 100vh;
  background: white;
  padding: 5px 15px;
  box-shadow: 0px 0px 4px grey;
  background: white;
`;

const ContainerHeader = styled.div`
  display: flex;
`;

const CloseButton = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const MeetingTitle = styled.div`
  width: 90%;
  font-weight: 500;
  padding-top: 10px;
  font-size: 16px;
`;
const MeetingTime = styled.div`
  width: 90%;
  color: gray;
  font-size: 12px;
  margin-top: 5px;
`;

const Status = styled.span`
  font-weight: 500;
  color: ${(props) => (props.starts ? "#74E113" : "red")};
  font-size: 12px;
  margin-left: 5px;
`;

const DetialsContainer = styled.div`
  width: 100%;
  height: 88%;
  margin-top: 30px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid purple;
  font-size: 12px;
  width: 115px;
  margin-top: 5px;
  cursor: pointer;
  img {
    width: 8px;
    height: 12px;
    margin-left: 15px;
  }
`;

const Tab = styled.div`
  width: 100%;
  height: 35px;
  min-height: 30px;
  display: flex;
  font-size: 12px;
  background: ${Colors["wikli-color-tab"]};
`;

const TabItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  padding: 0 10px;
  transition: background-color 0.5s ease-in-out;
  background: ${(props) =>
    props.currentTab === props.htmlFor
      ? Colors["wikli-color-tab-selected"]
      : "none"};
  color: ${(props) => (props.currentTab === props.htmlFor ? "white" : "white")};
  cursor: pointer;
`;

const TabItemDetails = styled.div`
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  height: 80%;
  overflow-y: scroll;
  padding: 15px 10px;
`;

export const MeetingDetailsStyles = {
  Container,
  CloseButton,
  MeetingTitle,
  ContainerHeader,
  MeetingTime,
  Status,
  DetialsContainer,
  Options,
  Tab,
  TabItem,
  TabItemDetails,
};
