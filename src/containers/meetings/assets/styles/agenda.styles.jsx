import styled from "styled-components";
import { Colors } from "../../../../assets/colors";

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background: ${(props) => props.bgColor};
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
  font-size: 12px;
`;

const Time = styled.p`
  width: 8%;
  color: ${Colors["wikli-color-grey-600"]};
  font-size: 12px;
`;

const Duration = styled.p`
  width: 12%;
  color: ${Colors["wikli-color-grey-600"]};
  font-size: 12px;
`;

const Actions = styled.p`
  width: 30px;
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
  Actions,
};
