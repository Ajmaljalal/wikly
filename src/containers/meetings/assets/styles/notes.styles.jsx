import styled from "styled-components";
import { Colors } from "../../../../assets/colors";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: white;
  border-radius: 5px;
  padding: 15px 15px;
  margin-bottom: 5px;
`;

const Text = styled.p`
  cursor: text;
`;

const Owner = styled.div`
  color: ${Colors["wikli-color-grey-600"]};
  cursor: text;
`;

const Actions = styled.div`
  width: 35px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  cursor: pointer;
`;

export const NoteStyles = {
  Container,
  Text,
  Owner,
  Actions,
};
