import styled from "styled-components";
import { Colors } from "../../assets/colors";

const MembersListItem = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    &:hover{
        background: ${Colors["wikli-color-table-row-hover-bg"]};
    }
`;

const MemberNameAndRole = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
    width: 120px;
    font-size: 12px;
    overflow: hidden;
`;

const MemberName = styled.div`
    font-size: 12px;
    font-weight: 500;
`;

const MemberRole = styled.div`
    font-size 10px;
    margin-top: 2px;
    color: grey;
`;

export const MemberStyles = {
    MembersListItem,
    MemberNameAndRole,
    MemberName,
    MemberRole,
}