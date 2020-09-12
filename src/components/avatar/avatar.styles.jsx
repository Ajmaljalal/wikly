import styled from 'styled-components'

const Container = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius:${(props) => props.radius};
    background:${(props) => props.backgroundColor};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Avatar = styled.div`
    border-radius: ${(props) => props.radius};
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    img {
        width: ${(props) => props.size};
        height: ${(props) => props.size};
        border-radius: ${(props) => props.radius};
    }
`;

const Status = styled.div`
    border: 2px solid white;
    background: ${
    (props) => props.status === 'online' ? 'green' :
        props.status === 'offline' ? 'red' :
            props.status === 'away' ? 'orange' : 'grey'
    };
    position: absolute;
    bottom: -3px;
    right: -4px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
`;

export const AvatarStyles = {
    Container,
    Avatar,
    Status
}