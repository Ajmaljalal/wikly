import styled from 'styled-components'
export const Container = styled.div`
    height: 100%;
    width: ${(props)=>props.isOpen ? '190px' : '5px'};
    background: #E6E7E9;
    padding: ${(props)=>props.isOpen ? '10px 10px' : '0px'};
    box-sizing: border-box;
    border-right: 1px solid lightgrey;
    position: relative;
    transition: width 0.2s;
`;
export const ToggleMenu = styled.div`
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid grey;
    position: absolute;
    top: 40%;
    left: 100%;
    transform: translate(-50%);
`;

export const ActiveChatRoom = styled.div`
    width: 100%;
    height: 45px;
    border-bottom: 1px solid gray;
    padding-bottom: 2px;
    display: ${(props)=>props.isOpen ? 'block' : 'none'};
`;

export const ActiveChatRoomName = styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 8px;
`;
export const ActiveChatRoomDetails = styled.div`
    font-weight: 500;
    font-size: 10px;
    display: flex;
`;

export const ActiveChatDetailsIcon = styled.div`
    margin-right: 10px;
    img {
        width: 15px;
        height: 15px;
    }
`;