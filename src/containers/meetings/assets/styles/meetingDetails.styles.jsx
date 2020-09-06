import styled from 'styled-components'
import { Colors } from '../../../../assets/colors'
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
    font-weight: bold;
    padding-top:10px; 
    font-size: 14px; 
`;
const MeetingTime = styled.div`
    width: 90%;
    color: gray;
    font-size: 12px;
    margin-top: 5px;
`;

const Status = styled.span`
    font-weight: 500;
    color: ${(props) => props.starts ? '#74E113' : 'red'};
    font-size: 12px;
    margin-left: 5px;
`;

const DetialsContainer = styled.div`
    width: 100%;
    height: 88%;
    margin-top: 20px;
    box-sizing: border-box;
    background: ${Colors["wikli-color-grey-200"]};
    border-radius: 5px;
    border: 0.5px solid ${Colors["wikli-color-grey-400"]}
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
    height: 40px;
    min-height: 30px;
    display: flex;
    font-size: 12px;
    border-radius: 5px;
    background: ${Colors["wikli-color-grey-50"]};  
    border-bottom: 0.5px solid ${Colors["wikli-color-grey-400"]}
`;

const TabItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-siz: 14px;
    font-weight: 500;
    padding: 0 10px;
    margin-right: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: background-color 0.5s ease-in-out;
    background: ${props => props.currentTab === props.htmlFor ? Colors["wikli-color-grey-200"] : 'none'};
    color: ${props => props.currentTab === props.htmlFor ? Colors["wikli-color-primary-dark"] : 'black'};
    cursor: pointer;
`;

const TabItemDetails = styled.div`
    width: 100%;
    // height: 94%;
    border-radius: 5px;
    box-sizing: border-box;
    overflow-x: scroll;
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
    TabItemDetails
}

