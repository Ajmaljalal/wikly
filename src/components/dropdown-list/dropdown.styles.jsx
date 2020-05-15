import styled from 'styled-components'

const Container = styled.div`
    width: ${(props)=>props.width};
    border-radius: 3px;
    background: white;
    position: relative;
    box-shadow: 0px 0px 2px grey;
    margin-right: 5px;
    
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-radius: 3px;
    box-sizing: border-box;
`;

const Search = styled.input`
    border: none;
    border-radius: 3px;
    outline:none;
    padding: 9px;
    width: 80%;
    box-sizing: border-box;
    &:disabled{
        background: white;
    }
`;


const Arrow = styled.div`
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    img {
        width: 12px;
        height: 12px;
    }
`;

const Body = styled.div`
    width: 100%;
    height: auto;
    max-height: 250px;
    background: white;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 3px;
    position: absolute;
    box-shadow: 0px 0px 10px grey;
    margin-top: 5px;
    left: 0;
    bottom: ${(props) => props.position === 'top' ? '40px' : 'auto'};
    z-index: 1000;
`;

export const DropdownStyles = {
    Container,
    Header,
    Search,
    Arrow,
    Body,
}