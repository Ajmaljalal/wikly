import styled from 'styled-components'
export const FolderContainer = styled.div`
    width: 100%;
    background: white;
    border: 0.5px solid grey;
    border-radius:5px;
    padding: 8px 10px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
`;

export const FolderBody = styled.div`
    width: 100%;
    margin-top: 10px;
    border-top: 0.5px solid lightgrey;
`;

export const HeaderRightSection = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid red;
`;

export const HeaderLeftSection = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    // border: 1px solid red;
`;
export const ArrowDown = styled.div`
    margin-right:8px;
    img {
        width: 10px;
        transition: transform .2s;
        transform: ${(props) => props.isOpen? 'rotate(0deg)' : 'rotate(-90deg)' };
    }
`;

export const FolderIcon = styled.div`
    margin-right:8px;
    height: 18px;
    img {
        width: 20px;
    }
`;

export const FolderName = styled.div`
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
`;