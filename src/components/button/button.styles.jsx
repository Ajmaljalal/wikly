import styled from 'styled-components'

export const ButtonWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    min-width: ${(props) => props.width};
    font-size: ${(props) => props.size};
    font-family: inherit;
    user-select: none;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    padding: 10px 7px;
    transition: background-color 300ms;
    background-color: ${(props) => props.disabled ? 'grey' : props.bgColor};
    border-radius: 3px;
    color: ${(props) => props.color};
    margin: ${(props) => props.margin ? '10px' : '0'};
    box-sizing: border-box;
    svg {
        margin-right: 7px;
    }
`;