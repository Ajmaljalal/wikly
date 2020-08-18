import styled from 'styled-components'


const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  left: 0; 
  background: rgba(83, 81, 81, 0.5);
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
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  height: ${(props) => props.height};
  transform: translate(-50%);
  box-shadow: 0px 0px 2px gray;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6%;
  padding: 10px 22px;
  color: white;
  background: ${(props) => props.bg};
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  svg {
    cursor: pointer;
  }
`;

const Body = styled.div`
  padding: 10px 20px;
  height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Buttons = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content:flex-end;
`;

export const ModalStyles = {
  Overlay,
  Content,
  Header,
  Body,
  Buttons,
}