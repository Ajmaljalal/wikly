import styled from 'styled-components'
import { Colors } from './../../assets/colors';


const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    width: ${(props) => props.isRound ? '30px' : '100%'};
    height: ${(props) => props.isRound ? '30px' : '100%'};
    padding: ${(props) => props.isRound ? '0' : '7px 10px'};
    img {
        width: 30px;
        border: 2px solid transparent;
        &:hover {
            border: ${(props) => props.border ? '2px solid white' : 'none'};
        }
    } 
    &:hover{
        border-radius: ${(props) => props.isRound ? '50%' : '5px'};
        background: ${(props) => props.isHover ? '#476282' : 'none'};
    }
`;

const Menu = styled.div`
    position: absolute;
    z-index: 1001;
    width: 190px;
    min-width: 180px;
    right:${(props) => props.left ? '' : '0px'};
    left: ${(props) => props.left ? '0px' : ''};
    top: ${(props) => props.bottom ? '' : '30px'};
    bottom: ${(props) => props.bottom ? '30px' : ''};
    font-weight: 400;
    font-size: 14px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.3);

`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 12px;
    cursor:pointer;
    min-height: 28px;
    border-radius: 4px;
    color: black;
    &:not(:last-child){
        border-bottom: .5px solid #d2d2d2;
    }
    &:hover{
        background: ${Colors["wikli-color-table-row-hover-bg"]};
        color: ${Colors["wikli-color-banner-text"]};
    }
`;

const MenuItemLabel = styled.div`
    width: 100%;
    text-align: left;
    color: black;
    cursor: pointer;
    text-decoration: none;
    div {
        width: 100%;
    }
    svg {
        margin-right: 8px;
    }
`;

export const ActionsDropdownStyles = {
    Container,
    Menu,
    MenuItem,
    MenuItemLabel
}