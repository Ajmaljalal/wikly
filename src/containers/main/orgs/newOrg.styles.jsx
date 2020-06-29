import styled from 'styled-components'
const Container = styled.div`
  width: 500px;
  height: ${(props) => props.height};
  display:flex;
  background: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 0px 4px #ccc;
  margin-top: 100px;
  h1, p {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

const Headings = styled.div`
  margin-bottom: 10px;
`; 
const HeadingOne = styled.h2`
  margin: 0;
`;
const HeadingTwo = styled.p`

`;
const Policy = styled.p`
  font-size: 12px;
`;

const Details = styled.div`

`;

export const NewOrgStyles = {
  Container,
  Headings,
  HeadingOne,
  HeadingTwo,
  Policy,
  Details,
}