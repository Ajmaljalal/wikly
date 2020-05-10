import styled from 'styled-components'

export const ColumnsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
`;

export const MeetingsColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 5px;
  width: 100%;
`
export const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: ${(props) => props.isToday ? '15px' : '12px'};
  color: ${(props) => props.isToday ? 'red' : 'black'};
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

export const ColumnBody = styled.div`
  width: 100%;
  box-sizing:border-box;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 2px;

  &::-webkit-scrollbar {
    width: 2px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.3);
    border-radius: 5px;
  }
`;
