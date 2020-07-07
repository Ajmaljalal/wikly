import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getOrgsInvitations } from '../../../redux/orgs/actions'
import Button from '../../../components/button/Button'
import NewOrg from './NewOrg'
import { OrgStyles } from './index.styles'

class Organization extends Component {
  state = {
    createNewOrg: false
  }

  toggleCreateNewOrg = () => {
    this.setState({
      createNewOrg: true
    })
  }

  componentDidMount() {
    this.props.getOrgsInvitations(this.props.profile?.email)
  }

  render() {
    return (
      <OrgStyles.Container>
        <OrgStyles.Logo>WIKLI</OrgStyles.Logo>
        {this.state.createNewOrg ? <NewOrg /> : this.renderCreateNewOrgButton()}
      </OrgStyles.Container>
    )
  }

  renderCreateNewOrgButton = () => {
    return (
      <OrgStyles.CreatNewOrg>
        {this.renderInvitedToOrgsList()}
        <OrgStyles.OrSeparator>-------------- OR -------------</OrgStyles.OrSeparator>
        <Button
          onClick={this.toggleCreateNewOrg}
          children='Create your own org'
          bgColor='green'
          margin='20px'
          color='white'
          width='200px'
          disabled={false}
        />
      </OrgStyles.CreatNewOrg>
    )
  }


  renderInvitedToOrgsList = () => {
    const { orgsInvitations } = this.props
    if (orgsInvitations?.length > 0) {
      return (
        <OrgStyles.InvitedToOrgsList>
          {
            orgsInvitations.map((org) => {
              return (
                this.renderInvitedToOrgItem(org)
              )
            })
         }
        </OrgStyles.InvitedToOrgsList>
      )
    } else {
      return (
        <Fragment>
          <p>You are not invited to any org (organization) yet.</p>
          <p>Please contact someone in your work place to invite you to an existing org.</p>
        </Fragment>
      )
    }
  }
  renderInvitedToOrgItem = (org) => {
    return (
      <OrgStyles.InvitedToOrgItem>
        <span style={{fontSize: '14px'}}>You're invited to {org.orgName}</span>
        {/* <span>{org.role}</span> */}
        {/* <span>By {org.invitedByName}</span> */}
        <Button
          onClick={this.toggleCreateNewOrg}
          children='Reject'
          bgColor='gray'
          fontSize='12px'
          margin={false}
          color='white'
          width='40px'
          disabled={false}
        />
        <Button
          onClick={this.toggleCreateNewOrg}
          children='Accept'
          bgColor='green'
          fontSize='12px'
          margin={false}
          color='white'
          width='40px'
          disabled={false}
        />
      </OrgStyles.InvitedToOrgItem>
   )
  }

}


const mapStateToProps = (state) => {
  return {
    orgsInvitations: state.orgsState.invitations,
    profile: state.profileState?.profile
    // orgs: firestore.data.orgs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrgsInvitations: (userEmail) => dispatch(getOrgsInvitations(userEmail))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);

