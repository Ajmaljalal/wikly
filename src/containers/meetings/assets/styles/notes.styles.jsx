import styled from "styled-components";
import { Colors } from "../../../../assets/colors";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  border: 0.5px solid ${Colors["wikli-color-grey-400"]};
  border-radius: 5px;
  padding: 15px 15px;
  margin-bottom: 4px;
`;

const Text = styled.p`
`;

const Owner = styled.div`
  color: ${Colors["wikli-color-grey-600"]};
  margin-bottom:5px;
`;

const Actions = styled.div`
  width: 35px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const NoteStyles = {
  Container,
  Text,
  Owner,
  Actions,
};
