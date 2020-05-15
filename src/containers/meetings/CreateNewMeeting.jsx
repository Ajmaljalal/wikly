import React, { Component } from 'react'
import { findInArrayOfObjects } from '../../helpers/arrays'
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

  addAllMembers = (members) => (e) => {
    const { invitedMembers } = this.state
    if (invitedMembers.length === members.length) {
      this.setState({
        invitedMembers: []
      })
    } else {
      this.setState({
        invitedMembers: members
      })
    }
  }

  addOrRemoveMember = (member, isInvited) => (e) => {
    const { invitedMembers } = this.state
    const newMembers = invitedMembers
    if (isInvited) {
      newMembers.splice(newMembers.findIndex(v => v.name === member.name), 1);
    } else {
      newMembers.push(member)
    }
    this.setState({
      invitedMembers: newMembers
    })
  }

  render() {
    const { toggleAddMeetingModal } = this.props
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
      },
      {
        "id": "bb647381-91d3-42fa-983d-f663bbrewqd306c",
        "name": "Mario Thompweson",
        "initials": "MT",
        "username": "May26",
        "email": "Marley.McDermott@hotmail.com",
      },
      {
        "id": "bb647381-91d3-42fa-983d-f663bereqbdd306c",
        "name": "Mario Thomphtson",
        "initials": "MT",
        "username": "May26",
        "email": "Marley.McDermott@hotmail.com",
      },
      {
        "id": "bb647381-91d3-42fa-983der3-f663bbdd306c",
        "name": "Mario Thompso45n",
        "initials": "MT",
        "username": "May26",
        "email": "Marley.McDermott@hotmail.com",
      },
      {
        "id": "bb647381-91d3-42343fa-983d-f663bbdd306c",
        "name": "Mario Thompso233n",
        "initials": "MT",
        "username": "May26",
        "email": "Marley.McDermott@hotmail.com",
      }
    ]
    return (
      <NewMeetingStyles.Form>
        <Input
          label='Title'
          required='true'
          placeholder='Enter a title for the meeting'
        />
        {this.renderSelectDateTime()}
        <Input
          label='Url'
          required='true'
          placeholder='Past any relevant url here'
        />
        {this.renderInvitePeopleButtons(options)}
        {this.renderInvitedPeople()}
        {this.renderCheckBoxes()}
        {this.renderActionButtons()}
      </NewMeetingStyles.Form>
    )
  }

  renderSelectDateTime = () => {
    return (
      <NewMeetingStyles.DateTime>
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
      </NewMeetingStyles.DateTime>
    )
  }

  renderInvitePeopleButtons = (options) => {
    const { invitedMembers } = this.state
    const isAllInvited = invitedMembers.length === options.length
    const btnText = isAllInvited ? 'Remove All' : 'Invite All'
    const bgColor = isAllInvited ? Colors.pumpkin : Colors.cyan
    return (
      <NewMeetingStyles.InviteMembersButtons>
        {this.renderInviteesDropdownList(options)}
        <Button
          color={bgColor}
          bgColor= 'white'
          fontSize='12px'
          onClick={this.addAllMembers(options)}
        >
          {btnText}
        </Button>
      </NewMeetingStyles.InviteMembersButtons>
    )
  }

  renderInvitedPeople = () => {
    const { invitedMembers } = this.state
    if (invitedMembers.length) {
      return (
        <NewMeetingStyles.InvitedList>
          {this.state.invitedMembers.map(member => {
            return <NewMeetingStyles.Invited key={member.id}>{member.name}</NewMeetingStyles.Invited>
          })}
        </NewMeetingStyles.InvitedList>
        )
      } else return null
  }

  renderInviteesDropdownList = (options) => {
    return (
      <DropdownList
        width='230px'
        position='bottom'
        searchAble={true}
        closeOnClick={false}
        placeholder='Invite People to Meeting'
      >
        {options.map((member) => {
          return (
            this.renderInviteesDropDownListItem(member)
          )
        })}
      </DropdownList>
    )
  }

  renderInviteesDropDownListItem = (member) => {
    const { invitedMembers } = this.state
    const isInvited = findInArrayOfObjects(invitedMembers, 'name', member.name)
    const btnText = isInvited ? 'Remove' : 'Invite'
    return (
      <NewMeetingStyles.InviteesListItem>
        <Avatar
          type='circle'
          size='30px'
          initials={member.initials}
          status='online'
        />
        <NewMeetingStyles.InviteeNameAndRole>
          <NewMeetingStyles.InviteeName>{member.name}</NewMeetingStyles.InviteeName>
          <NewMeetingStyles.InviteeRole>{member.username}</NewMeetingStyles.InviteeRole>
        </NewMeetingStyles.InviteeNameAndRole>
        <Button
          color='white'
          bgColor={isInvited ? Colors.pumpkin : Colors.cyan}
          fontSize='10px'
          onClick={this.addOrRemoveMember(member, isInvited)}
        >
          {btnText}
        </Button>
      </NewMeetingStyles.InviteesListItem>

    )
  }

  renderCheckBoxes = () => {
    return (
      <NewMeetingStyles.InputsGroup>
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
          selected
          required='true'
          placeholder='Enter a title for the meeting'
          type='radio'
          oneLine={true}
        />
      </NewMeetingStyles.InputsGroup>
    )
  }

  renderActionButtons = () => {
    const { toggleAddMeetingModal } = this.props
    return (
      <NewMeetingStyles.ActionButtons>
        <Button
          color='white'
          bgColor= {Colors.flame}
          fontSize='12px'
          margin={true}
          width='45px'
          onClick={toggleAddMeetingModal}
        >
          {'Cancel'}
        </Button>
        <Button
          color='white'
          bgColor= {Colors.cyan}
          fontSize='12px'
          margin={true}
          width='45px'
          onClick={()=>console.log()}
        >
          {'Save'}
        </Button>
        
      </NewMeetingStyles.ActionButtons>
    )
  }
}

export default CreateNewMeeting;