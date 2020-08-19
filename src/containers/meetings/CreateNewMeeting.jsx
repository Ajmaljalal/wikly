import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createMeeting } from '../../redux/meetings/actions'
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
    newMeeting: {
      invitedMembers: [],
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      url: '',
      frequency: 'oneTime',
      repeatEvery: '',
      repeatOn: '',
      endDate: ''
    },
    emptyFormError: '',
  }


  scheduleNewMeeting = async () => {
    const { title, date, startTime, invitedMembers } = this.state.newMeeting
    const { profile, currentProject } = this.props
    if (title && date && startTime && invitedMembers.length) {
      await this.props.createNewMeeting(profile, currentProject.projectId, this.state.newMeeting)
      this.props.toggleAddMeetingModal()
    } else {
      this.setState({
        emptyFormError: 'Empty form! title, date, start time and inviting at least one person is required'
      })
    }
  }

  handleInputeChange = (e) => {
    const { newMeeting } = this.state
    const meeting = newMeeting
    meeting[e.target.name] = e.target.value
    this.setState({
      newMeeting: meeting
    })
  }

  addRemoveAllMembers = (members) => (e) => {
    const { newMeeting } = this.state
    const meeting = newMeeting
    if (meeting.invitedMembers.length === members.length) {
      meeting.invitedMembers = []
      this.setState({
        newMeeting: meeting
      })
    } else {
      meeting.invitedMembers = members
      this.setState({
        newMeeting: meeting
      })
    }
  }

  addOrRemoveMember = (member, isInvited) => (e) => {
    const { newMeeting } = this.state
    const meeting = newMeeting
    const newMembers = meeting.invitedMembers
    if (isInvited) {
      newMembers.splice(newMembers.findIndex(v => v.name === member.name), 1);
    } else {
      newMembers.push(member)
    }
    meeting.invitedMembers = newMembers
    this.setState({
      newMeeting: meeting
    })
  }

  render() {
    const { toggleAddMeetingModal } = this.props
    return (
      <Modal
        onClose={toggleAddMeetingModal}
        headerText='Schedule a Meeting'
        width='500px'
        height='550px'
        withHeader={true}
        buttons={this.renderActionButtons()}
        headerBg={Colors["wikli-color-primary-default"]}
      >
        {this.renderForm()}
      </Modal>
    )
  }

  renderForm = () => {
    const { title, url } = this.state.newMeeting
    const { emptyFormError } = this.state
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
      }
    ]
    return (
      <NewMeetingStyles.Form onChange={this.handleInputeChange}>
        <Input
          name='title'
          value={title}
          label='Title'
          required='true'
          placeholder='Enter a title for the meeting'
        />
        {this.renderSelectDateTime()}
        <Input
          name='url'
          value={url}
          label='Url (e.g. zoom meeting url)'
          required='true'
          placeholder='Paste any relevant url here'
        />
        {this.renderInvitePeopleButtons(options)}
        {this.renderInvitedPeople()}
        {this.renderFrequencyOptions()}
        {this.renderRecurringMeetingOptions()}
        {emptyFormError ? <NewMeetingStyles.EmptyFormError>{emptyFormError}</NewMeetingStyles.EmptyFormError> : null}
      </NewMeetingStyles.Form>
    )
  }

  renderSelectDateTime = () => {
    const { date, startTime, endTime } = this.state.newMeeting
    return (
      <NewMeetingStyles.DateTime>
        <Input
          name='date'
          value={date}
          label='Date'
          required='true'
          type='date'
        />
        <Input
          name='startTime'
          value={startTime}
          label='Start time'
          required='true'
          type='time'
        />
        <Input
          name='endTime'
          value={endTime}
          label='End time'
          required='true'
          type='time'
        />
      </NewMeetingStyles.DateTime>
    )
  }

  renderInvitePeopleButtons = (options) => {
    const { invitedMembers } = this.state.newMeeting
    const isAllInvited = invitedMembers.length === options.length
    const btnText = isAllInvited ? 'Remove All' : 'Invite All'
    const bgColor = isAllInvited ? Colors.pumpkin : Colors.cyan
    return (
      <NewMeetingStyles.InviteMembersButtons>
        {this.renderInviteesDropdownList(options)}
        <Button
          color={bgColor}
          bgColor='white'
          fontSize='12px'
          onClick={this.addRemoveAllMembers(options)}
        >
          {btnText}
        </Button>
      </NewMeetingStyles.InviteMembersButtons>
    )
  }

  renderInvitedPeople = () => {
    const { invitedMembers } = this.state.newMeeting
    if (invitedMembers.length) {
      return (
        <NewMeetingStyles.InvitedList>
          {this.state.newMeeting.invitedMembers.map(member => {
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
    const { invitedMembers } = this.state.newMeeting
    const isInvited = findInArrayOfObjects(invitedMembers, 'name', member.name)
    const btnText = isInvited ? 'Remove' : 'Invite'
    return (
      <NewMeetingStyles.InviteesListItem key={member.initials}>
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

  renderFrequencyOptions = () => {
    const { frequency } = this.state.newMeeting
    return (
      <NewMeetingStyles.InputsGroup>
        <Input
          label='One-Time'
          name='frequency'
          value='oneTime'
          checked={frequency === 'oneTime'}
          required='true'
          type='radio'
          oneLine={true}
        />
        <Input
          label='Recurring'
          name='frequency'
          value='recurring'
          checked={frequency === 'recurring'}
          required='true'
          type='radio'
          oneLine={true}
        />
      </NewMeetingStyles.InputsGroup>
    )
  }

  renderRecurringMeetingOptions = () => {
    const { frequency } = this.state.newMeeting
    if (frequency === 'recurring') {
      return (
        <NewMeetingStyles.RecurrenceOptions>
          {this.renderRepeatEveryOptions()}
          {this.renderRepeatOnOptions()}
          {this.renderEndDate()}
        </NewMeetingStyles.RecurrenceOptions>
      )
    }
  }

  renderRepeatEveryOptions = () => {
    const repeatOptions = ['day', 'week', 'month']
    return (
      <NewMeetingStyles.RecurrenceRepeatEvery>
        Repeat every:
        {repeatOptions.map((option) => {
          return (
            <Input
              name='repeatEvery'
              value={option}
              label={option}
              required='true'
              type='radio'
              oneLine='true'
              key={option}
            />
          )
        })}
      </NewMeetingStyles.RecurrenceRepeatEvery>
    )
  }

  renderRepeatOnOptions = () => {
    const { repeatEvery } = this.state.newMeeting
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    if (repeatEvery === 'week') {
      return (
        <NewMeetingStyles.RecurrenceRepeatOn>
          Repeat on:
          {weekDays.map((day) => {
            return (
              <Input
                name='repeatOn'
                value={day}
                label={day}
                required='true'
                type='radio'
                oneLine='true'
                key={day}
              />
            )
          })}
        </NewMeetingStyles.RecurrenceRepeatOn>

      )
    }
  }

  renderEndDate = () => {
    const { endDate } = this.state.newMeeting
    return (
      <NewMeetingStyles.RecurrenceEnds>
        <Input
          name='endDate'
          value={endDate}
          label='End date:'
          required='true'
          type='date'
          oneLine={true}
        />
      </NewMeetingStyles.RecurrenceEnds>

    )

  }
  renderActionButtons = () => {
    const { toggleAddMeetingModal } = this.props
    return (
      <Fragment>
        <Button
          color='white'
          bgColor={Colors["wikli-color-red-600"]}
          fontSize='12px'
          margin={true}
          onClick={toggleAddMeetingModal}
        >
          {'Cancel'}
        </Button>
        <Button
          color='white'
          bgColor={Colors["wikli-color-primary-default"]}
          fontSize='12px'
          margin={true}
          onClick={this.scheduleNewMeeting}
        >
          {'Save'}
        </Button>

      </Fragment>
    )
  }
}

const mapDStateToProps = ({ profileState, projectsState }) => {
  return {
    profile: profileState.profile,
    currentProject: projectsState.current_project
  }
}
const mapDispatchToProps = (disptach) => {
  return {
    createNewMeeting: (profile, projectId, meeting) => disptach(createMeeting(profile, projectId, meeting))
  }
}

export default connect(mapDStateToProps, mapDispatchToProps)(CreateNewMeeting);