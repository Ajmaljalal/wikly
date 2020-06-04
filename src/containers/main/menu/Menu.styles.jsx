import styled from 'styled-components'

const MenuBar = styled.div`
  height:100%;
  width: 3.3%;
  min-width: 50px;
  max-width: 3.3%;
  background: white;
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid lightgrey;
  box-shadow: 0px 4px 4px lightgrey;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
    img {
      width: 30px;
      height:30px;
    }
`
const MenuItemsTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    img {
      width: 20px;
      height:20px;
      margin: 2px 0;
      padding: 7px 35px;
      border: 2px solid transparent;
      border-radius: 5px;
      &:hover {
        border: 2px solid purple;
        padding: 7px;
      }
    }
`;

const MenuItemsBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-bottom: 10px;
      border: 2px solid transparent;
      &:hover {
        border: 2px solid purple;
      }
    }
`;

export const MenuStyles = {
  MenuBar,
  Logo,
  MenuItemsTop,
  MenuItemsBottom
}