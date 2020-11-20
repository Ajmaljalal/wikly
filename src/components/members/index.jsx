import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DropdownList from '../../components/dropdown-list/DropdownList'
import Button from '../../components/button/Button'
import Avatar from '../../components/avatar/Avatar'
import { Colors } from '../../assets/colors'
import { findInArrayOfObjects } from './../../helpers/arrays';
import { MemberStyles } from './members.styles'
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
    "initials": "OH",
    "username": "Oda.Jakubowski",
    "email": "Cecelia_Schroeder@yahoo.com",
  },
  {
    "id": "ae086bcc-e601-47a6-9366-134f6388d015",
    "name": "Ajmal Jalal",
    "initials": "AJ",
    "username": "Oda.Jakubowski",
    "email": "Cecelia_Schroeder@yahoo.com",
  },
  {
    "id": "ae086bcc-e601-47a6-9366-134f6388d015",
    "name": "Iman Jalal",
    "initials": "IJ",
    "username": "Oda.Jakubowski",
    "email": "Cecelia_Schroeder@yahoo.com",
  },
  {
    "id": "ae086bcc-e601-47a6-9366-134f6388d015",
    "name": "Sahil Arifi",
    "initials": "SA",
    "username": "Oda.Jakubowski",
    "email": "Cecelia_Schroeder@yahoo.com",
  }
]

class MembersList extends Component {

  state = {
    search: ''
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  addOrRemoveMember = (member, isInvited) => (e) => {
    console.log(member.name)
  }

  render() {
    const { placeholder } = this.props
    const { search } = this.state
    const filteredMembers = options.filter(member => {
      return member.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <DropdownList
        width='120px'
        position='bottom'
        searchAble={true}
        closeOnClick={false}
        placeholder={placeholder}
        handleSearch={this.handleSearch}
        value={this.state.value}
      >
        {filteredMembers.map((member) => {
          return (
            this.renderInviteesDropDownListItem(member)
          )
        })}
      </DropdownList>
    )
  }

  renderInviteesDropDownListItem = (member) => {
    // const { invitedMembers } = this.props
    const invitedMembers = []
    
    const isInvited = findInArrayOfObjects(invitedMembers, 'name', member.name)
    const btnText = isInvited ? 'Remove' : 'Invite'
    return (
      <MemberStyles.MembersListItem key={member.initials}>
        <Avatar
          type='circle'
          size='30px'
          initials={member.initials}
          status='online'
        />
        <MemberStyles.MemberNameAndRole>
          <MemberStyles.MemberName>{member.name}</MemberStyles.MemberName>
        </MemberStyles.MemberNameAndRole>
        <Button
          color='white'
          bgColor={isInvited ? Colors["wikli-color-red-600"] : Colors["wikli-color-primary-default"]}
          small={true}
          onClick={this.addOrRemoveMember(member, isInvited)}
        >
          {btnText}
        </Button>
      </MemberStyles.MembersListItem>

    )
  }

  static propTypes = {
    placeholder: PropTypes.string
  }
}

export default MembersList
