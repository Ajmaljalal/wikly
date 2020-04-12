import styled from 'styled-components'

export const MenuBar = styled.div`
  height:100%;
  width: 4%;
  min-width: 65px;
  background: white;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid gray;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
    img {
      width: 45px;
      height:45px;
    }
`
export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    img {
      width: 25px;
      height:25px;
      margin: 2px 0;
      padding: 7px 35px;
      border: 2px solid transparent;
      border-radius: 5px;
      &:hover {
        border: 2px solid purple;
        padding: 7px;
      }
    }
`