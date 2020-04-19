import styled from 'styled-components'
export const ContentBody = styled.div`
  width: width: 100%;
  height: 96%;
  display:flex;
  flex-direction: column;
  margin: 10px 20px;
`;

export const ColumnSmall = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  width: 280px;
  height: 580px;
  margin-right: 20px;
  border: 1px solid #AEABAB;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  background: #E6E7E9;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
`
