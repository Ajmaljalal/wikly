import styled from 'styled-components'
export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 2px;
    width: 40vw;
    height: 100vh;
    background: white;
    border-left: 1px solid black;
    padding: 5px 15px;
`; 

export const ContainerHeader = styled.div`
    display: flex;
`;

export const CloseButton = styled.div`
    width: 10%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;

export const MeetingTitle = styled.div`
    width: 90%;
    font-weight: bold;
    padding-top:10px; 
    font-size: 14px; 
`;
export const MeetingTime = styled.div`
    width: 90%;
    color: gray;
    font-size: 12px;
    margin-top: 5px;
`;

export const DetialsContainer = styled.div`
    width: 100%;
    height: 75%;
    margin-top: 20px;
    box-sizing: border-box;
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid purple;
    border-radius: 3px;
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

export const Tab = styled.div`
    width: 100%;
    display: flex;
    font-size: 12px;
`;

export const TabItem = styled.div`
    font-siz: 14px;
    font-weight: bold;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 3px;
    transition: background-color 0.5s ease-in-out;
    background: ${props => props.currentTab === props.for ? 'purple' : 'none'};
    color: ${props => props.currentTab === props.for ? 'white' : 'black'};
    cursor: pointer;
`;

export const TabItemDetails = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    margin-top: 20px;
`;

