import styled from 'styled-components'
export const Container = styled.div`
  display:flex;
  box-sizing: border-box;
  margin-top: 15px;
`;

export const UserPhoto = styled.div`
    margin-right: 8px;
    img {
        width: 40px;
        height: 40px;
        border-radius: 7px;
    }

`;

export const UserNameMessageTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`;

export const UserName = styled.div`
    font-weight: bold;
    margin-bottom: 3px;
`;

export const MessageText = styled.div`
`;

export const MessageAttachment = styled.div`
    max-width: 350px;
    margin-top: 5px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 7px;
    }
`;