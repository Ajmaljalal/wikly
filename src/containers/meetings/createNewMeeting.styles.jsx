import styled from 'styled-components'

const InputsGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 20px;
    margin-top: 10px;
`

const Invitees = styled.div`
    display: flex;
    padding-bottom: 5px;
    flex-wrap: wrap;
    select {
        padding: 5px;
        outline: none;
        border-radius: 3px;
        font-size: 11px;
    }
`

const Invitee = styled.div`
    border: 1px solid green;
    border-radius: 5px;
    height: 20px;
    padding: 0 5px;
    min-width: 90px;
    background: rgba(0, 128, 0, 0.1);
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2px;
    cursor: pointer;
    margin-right: 3px;
    margin-bottom: 1px;
`

const InviteesListItem = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    &:hover{
        background: lightgrey;
    }
`;

const InviteeNameAndRole = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const InviteeName = styled.div`
    font-size:13px;
    font-weight: 500;
`;
const InviteeRole = styled.div`
    font-size 10px;
    margin-top: 2px;
    color: grey;
`;


export const NewMeetingStyles = {
    InputsGroup,
    Invitees,
    Invitee,
    InviteesListItem,
    InviteeNameAndRole,
    InviteeName,
    InviteeRole,
    
}
