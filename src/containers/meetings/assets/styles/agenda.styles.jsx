import styled from "styled-components";
import { Colors } from "../../../../assets/colors";

const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  border: 0.5px solid ${Colors["wikli-color-grey-400"]};
  border-radius: 5px;
  padding: 15px 15px;
  margin-bottom: 4px;
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

const Actions = styled.div`
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
  Actions,
};
