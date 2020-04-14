import styled from 'styled-components'
export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 2px;
    width: 40vw;
    height: 100vh;
    background: white;
    border-left: 1px solid black;
    padding: 5px 10px;
`;

export const CloseButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    div{
        cursor: pointer;
    }
    img {
        width: 20px;
        height: 20px;
    }
`;