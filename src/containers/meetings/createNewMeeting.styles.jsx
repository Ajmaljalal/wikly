import styled from 'styled-components'

const Form = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;
const InputsGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    height: 20px;
    margin-top: 10px;
`;

const DateTime = styled.div`
    display: flex;
    justify-content: space-between;
`;

const InviteMembersButtons = styled.div`
    display: flex;
    height: 35px;
    padding-right: 5px;
    margin: 10px 0 5px 0;
`;

const InvitedList = styled.div`
    display: flex;
    padding-bottom: 5px;
    flex-wrap: wrap;
    border: 1px solid lightgrey;
    margin-top: 5px;
    max-height: 60px;
    overflow-y: auto;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 3px;
`;

const Invited = styled.div`
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
`;

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
    height: 30px;
    overflow: hidden;
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
const ActionButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
`;


export const NewMeetingStyles = {
    Form,
    InputsGroup,
    DateTime,
    InviteMembersButtons,
    InvitedList,
    Invited,
    InviteesListItem,
    InviteeNameAndRole,
    InviteeName,
    InviteeRole,
    ActionButtons,
    
}
