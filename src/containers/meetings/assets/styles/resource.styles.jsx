import styled from "styled-components";
import { Colors } from "../../../../assets/colors";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors["wikli-color-grey-300"]};
  padding: 0 15px 8px 15px;
  margin-top: 8px;
  width: 100%;
`;

const NullContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NullButtonContainer = styled.div`
  border: 3px dashed ${Colors["wikli-color-grey-400"]};
  border-radius: 5px;
  height: 60%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
  cursor: pointer;
  img {
    width: 120px;
    margin-bottom: 15px;
  }
  p {
    font-weight: 500;
  }
`;

const Image = styled.img`
  width: 35px;
  margin-right: 8px;
  padding: 4px;
  border: 3px solid transparent;
  transition: 1s border;
  border-radius: 15%;
  cursor: pointer;
  &:hover {
    border: 3px solid #000;
  }
`;

const Actions = styled.div`
  width: 45px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const FileName = styled.div`
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 2px;
  transition: 0.5s color;
  &:hover {
    color: #00acbf;
  }
`;

const FileDetails = styled.div`
  color: ${Colors["wikli-color-grey-400"]};
  span {
    margin-right: 7px;
  }
`;

const FileNameDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const File = styled.div`
  display: flex;
`;

const CircularProgressbarContainer = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    cursor: pointer;
    font-weight: 500;
`

export const ResourceStyles = {
  Container,
  Image,
  Actions,
  FileName,
  FileDetails,
  FileNameDetails,
  File,
  NullContainer,
  NullButtonContainer,
  CircularProgressbarContainer
};
