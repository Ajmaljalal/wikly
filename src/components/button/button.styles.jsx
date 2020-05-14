import styled from 'styled-components'

export const ButtonWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: ${(props) => props.size};
    font-family: inherit;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    text-align: center;
    padding: 9px 10px;
    transition: background-color 300ms;
    background-color: ${(props) => props.bgColor};
    border-radius: 4px;
    color: ${(props) => props.color};
    svg {
        margin-right: 5px;
    }
`;