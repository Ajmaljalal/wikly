import styled from 'styled-components'

const MenuBar = styled.div`
  height:100%;
  width: 3.3%;
  min-width: 48px;
  max-width: 48px;
  background: #2a4865;
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid #476282;
  box-shadow: 0px 4px 4px lightgrey;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
    img {
      width: 30px;
      height:30px;
    }
`;
const MenuItemsTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 5px;
  cursor: pointer;
`;

const MenuItemsBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
    img {
      border-radius: 50%;
      margin-bottom: 5px;
      padding: 1px;
    }
    svg {
      color: green;
    }
`;

const Image = styled.img`
    width: 25px;
    height: 25px;
    background: ${(props) => props.isActive ? 'white' : 'none'};
    margin: 2px 0;
    padding: 4px;
    border-radius: 5px;
    border: 3px solid transparent;
    &:hover{
      border: 3px solid white;
    }
`;

export const MenuStyles = {
  MenuBar,
  Logo,
  MenuItemsTop,
  MenuItemsBottom,
  Image
}