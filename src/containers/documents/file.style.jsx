import styled from 'styled-components'
export const Row = styled.div`
    width: 100%;
    padding: 8px;
    padding-left: 17px;
    box-sizing: border-box;
    background: #F0F2F5;
    border-radius:5px;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    &:hover {
      background: #DCDFE4;
    }
`;

export const RowRightSection = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    
`;

export const RowLeftSection = styled.div`
    width: 50%;
    display: flex;
`;

export const FileIcon = styled.div`
    margin-right:8px;
    img {
        width: 20px;
        height: 20px;
    }
`;

export const FileName = styled.div`
    margin-right:8px;
`;

export const FileDate = styled.div`
  width: 100px;
`;

export const FileSize = styled.div`
  width: 100px;
`;

export const Download = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  img {
    width: 20px;
    cursor: pointer;
  }
`;