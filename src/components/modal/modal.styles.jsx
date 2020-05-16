import styled from 'styled-components'

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left: 0; 
    background: rgba(83, 81, 81, 0.8);
    z-index: 1000;
`;

const Content = styled.div`
    position: absolute;
    z-index: 1000;
    top: 10%;
    left: 50%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    transform: translateY(-50%);
    transform: translateX(-50%);
    box-shadow: 0px 0px 4px black;
    box-sizing: border-box;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background: #F0F2F5;
    font-weight: bold;
    border-bottom: 1px solid lightgrey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;

const Body = styled.div`
    padding: 10px 15px;
    height: 95%;
    overflow-y: auto;
    overflow-x: hidden;
`

export const ModalStyles = {
    Overlay,
    Content,
    Header,
    Body,
}