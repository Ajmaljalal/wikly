import React, { Component } from 'react'
import Modal from '../../components/modal/Modal'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import DropdownList from '../../components/dropdown-list/DropdownList'
import Avatar from '../../components/avatar/Avatar'
import { Colors } from '../../assets/colors'
import { NewMeetingStyles } from './createNewMeeting.styles'

class CreateNewMeeting extends Component {

  state = {
    startDateAndTime: null,
    invitedMembers: [],

  }

  selectDateAndTime = (date) => {
    this.setState({
      startDateDateAndTime: date
    })
  }

  selectMembers = (member) => (e) => {
    console.log(member)
    const newMembers = this.state.invitedMembers
    newMembers.push(member)
    this.setState({
      invitedMembers: newMembers
    })
  }

  render() {
    const { toggleAddMeetingModal } = this.props
    console.log(this.state.invitedMembers)
    return (
      <Modal
        onClose={toggleAddMeetingModal}
        headerText='Schedule a Meeting'
      >
        {this.renderForm()}
      </Modal>
    )
  }

  renderForm = () => {
    const options = [
      {
        "id": "f8bf518c-9285-4330-895a-afb36009020a",
        "name": "Samara Macejkovic",
        "initials": "SM",
        "username": "Cindy.Jerde83",
        "email": "Liliana.Hauck@hotmail.com",
      },
      {
        "id": "ae086bcc-e601-47a6-9366-134f6388d015",
        "name": "Rosalinda Hoeger",
        "initials": "RH",
        "username": "Oda.Jakubowski",
        "email": "Cecelia_Schroeder@yahoo.com",
      },
      {
        "id": "bb647381-91d3-42fa-983d-f663bbdd306c",
        "name": "Mario Thompson",
        "initials": "MT",
        "username": "May26",
        "email": "Marley.McDermott@hotmail.com",
      }
    ]
    return (
      <form>
        <Input
          label='Title'
          required='true'
          placeholder='Enter a title for the meeting'
        />
        <Input
          label='Date'
          required='true'
          placeholder='Enter a title for the meeting'
          type='date'
        />
        <Input
          label='Start time'
          required='true'
          placeholder='Enter a title for the meeting'
          type='time'
        />
        <Input
          label='End time'
          required='true'
          placeholder='Enter a title for the meeting'
          type='time'
        />
        <NewMeetingStyles.Invitees>
          {this.renderInviteesDropdownList(options)}
          {this.state.invitedMembers.map(member => {
            return <NewMeetingStyles.Invitee key={member.id}>{member.name}</NewMeetingStyles.Invitee>
          })}
        </NewMeetingStyles.Invitees>
          {this.renderCheckBoxes()}
      </form>
    )
  }

  renderInviteesDropdownList = (options) => {
    return (
      <DropdownList width='250px' position='top'>
        {options.map((member) => {
          return (
            this.renderInviteesDropDownListItem(member)
         )
       })}
      </DropdownList>
    )
  }

  renderInviteesDropDownListItem = (member) => {
    return (
      <NewMeetingStyles.InviteesListItem>
         <Avatar
          type='squre'
          size='30px'
          initials={member.initials}
          status='online'
        />
        <NewMeetingStyles.InviteeNameAndRole>
          <NewMeetingStyles.InviteeName>{member.name}</NewMeetingStyles.InviteeName>
          <NewMeetingStyles.InviteeRole>{member.username}</NewMeetingStyles.InviteeRole>
        </NewMeetingStyles.InviteeNameAndRole>
        <Button color='white' bgColor={Colors.cyan} size='10px' onClick={this.selectMembers(member)}>
          Invite
        </Button>
      </NewMeetingStyles.InviteesListItem>
      
    )
  }

  renderCheckBoxes = () => {
    return (
      <NewMeetingStyles.InputsGroup>
      <Input
        label='Invite Everyone'
        required='true'
        placeholder='All'
        type='checkbox'
        oneLine={true}
      /> |
     <Input
        label='Recurring'
        name='repeat'
        required='true'
        placeholder='Enter a title for the meeting'
        type='radio'
        oneLine={true}
      />
      <Input
        label='One time'
        name='repeat'
        required='true'
        placeholder='Enter a title for the meeting'
        type='radio'
        oneLine={true}
      />
    </NewMeetingStyles.InputsGroup>
    )
  }
}

export default CreateNewMeeting;