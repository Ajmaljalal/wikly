import styled from 'styled-components'
import { Colors } from '../../assets/colors'


const MeetingsColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding:  8px 10px;
  border-bottom: 0.5px solid ${Colors["wikli-color-grey-400"]};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background: ${Colors["wikli-color-grey-50"]}
`
const HeaderTitle = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.isToday ? '15px' : '12px'};
  color: ${(props) => props.isToday ? 'red' : 'black'};
`

const HeaderIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
`

const ActionButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  &:hover{
    background: white;
    border: 1px solid lightgrey;
  }
`

const ColumnBody = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  padding-left: 6px;
  border-right: 2px solid transparent;
`;

export const ColumnStyles = {
    MeetingsColumnHeader,
    HeaderTitle,
    HeaderIconsWrapper,
    ActionButton,
    ColumnBody
}