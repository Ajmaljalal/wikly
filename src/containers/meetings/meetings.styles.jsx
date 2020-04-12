import styled from 'styled-components'
export const Container = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  background: #F0F2F5;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const MeetingsColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  height: 580px;
  margin-right: 20px;
  border: 1px solid #AEABAB;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  background: #E6E7E9;
`