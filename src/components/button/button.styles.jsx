import styled from "styled-components";

export const ButtonWrapperLarge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: ${(props) => (props.width ? props.width : "120px")};
  font-size: ${(props) => (props.size ? props.size : "14px")};
  font-family: inherit;
  user-select: none;
  font-style: normal;
  font-stretch: normal;
  text-align: center;
  padding: 9px 13px;
  transition: background-color 300ms;
  background-color: ${(props) => (props.disabled ? "grey" : props.bgColor)};
  border-radius: 5px;
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? "10px" : "0")};
  box-sizing: border-box;
  svg {
    margin-right: 7px;
  }
  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#063073")};
    color: white
  }
`;

export const ButtonWrapperMedium = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "60px")};
  font-size: ${(props) => (props.size ? props.size : "11px")};
  user-select: none;
  font-style: normal;
  font-stretch: normal;
  text-align: center;
  padding: 7px 10px;
  transition: background-color 300ms;
  background-color: ${(props) => (props.disabled ? "grey" : props.bgColor)};
  border-radius: 4px;
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? "10px" : "0")};
  box-sizing: border-box;
  svg {
    margin-right: 7px;
  }
  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#063073")};
    color: white
  }
`;

export const ButtonWrapperSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: ${(props) => (props.width ? props.width : "40px")};
  font-size: ${(props) => (props.size ? props.size : "10px")};
  user-select: none;
  font-style: normal;
  font-stretch: normal;
  text-align: center;
  padding: 5px 5px;
  transition: background-color 300ms;
  background-color: ${(props) => (props.disabled ? "grey" : props.bgColor)};
  border-radius: 4px;
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? "10px" : "0")};
  box-sizing: border-box;
  svg {
    margin-right: 7px;
  }
  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#063073")};
    color: white
  }
`;

export const ButtonStyles = {
  ButtonWrapperLarge,
  ButtonWrapperMedium,
  ButtonWrapperSmall,
};
