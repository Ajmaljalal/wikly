import styled from 'styled-components'
export const Container = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  background: #F0F2F5;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const MeetingsColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  height: 580px;
  margin-right: 20px;
  border: 1px solid #AEABAB;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  background: #E6E7E9;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
`
export const MeetingsColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 5px;
  width: 100%;
`
export const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
`

export const HeaderIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end
  width: 30%;
`

export const ActionButton = styled.div`
  width: 20px;
  margin-left: 2px;
  cursor: pointer
`

export const Divider = styled.div`
  min-height: 5px;
  width: 50%;
  background: purple;
  border-radius: 5px;
  margin-bottom: 5px;
`