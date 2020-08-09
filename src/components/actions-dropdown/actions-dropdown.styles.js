import styled from 'styled-components'

const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-left: 3px;
    img {
        max-width: 24px;
    } 
    &:hover{
        border-radius: 50%;
        background: ${(props) => props.isHover ? '#476282' : 'none'};
    }
`;

const Menu = styled.div`
    position: absolute;
    z-index: 1000;
    min-width: 180px;
    right:${(props) => props.left ? '' : '0px'};
    left: ${(props) => props.left ? '0px' : ''};
    top: ${(props) => props.bottom ? '' : '30px'};
    bottom: ${(props) => props.bottom ? '30px': ''};
    font-weight: 300;
    font-size: 14px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.3);

`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 12px;
    cursor:pointer;
    min-height: 28px;
    border-radius: 4px;
    &:not(:last-child){
        border-bottom: .5px solid #d2d2d2;
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

    &:hover{
        color: darkblue;
        font-weight: 400;
    }
`;

export const ActionsDropdownStyles = {
    Container,
    Menu,
    MenuItem,
    MenuItemLabel
}