import styled from 'styled-components'
import { Colors } from '../../../../assets/colors'

const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background:white;
  border-radius: 5px;
  padding: 15px 15px;
  margin-bottom: 5px;
`;
const Text = styled.p`
  width: 45%;
`;
const Speaker = styled.div`
  width: 15%;
  color: ${Colors["wikli-color-grey-600"]};
`;

const Time = styled.p`
  width: 10%;
  color: ${Colors["wikli-color-grey-600"]};
`;

const Duration = styled.p`
  width: 10%;
  color: ${Colors["wikli-color-grey-600"]};
`;

const Actions = styled.p`
  width: 35px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
export const AgendaStyles = {
  Container,
  Speaker,
  Text,
  Time,
  Duration,
  Actions
}