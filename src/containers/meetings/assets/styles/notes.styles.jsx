import styled from "styled-components";
import { Colors } from "../../../../assets/colors";

const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background: white;
  border-radius: 5px;
  padding: 15px 15px;
  margin-bottom: 5px;
`;

const Owner = styled.div``;

const Actions = styled.div`
  width: 35px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const NoteStyles = {
  Container,
  Owner,
  Actions,
};
