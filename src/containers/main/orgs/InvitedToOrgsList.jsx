import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { OrgStyles } from './index.styles'
import Button from '../../../components/button/Button'
import { updateInvitation, rejectInvitation } from '../../../redux/orgs/actions'

class InvitedToOrgsList extends React.Component {


  acceptInvitation = async (invitation, invitationId) => {
    const { updateInvitation, profile } = this.props
    await updateInvitation({
      userName: profile.name,
      userEmail: profile.email,
      userId: profile.userId,
      invitation: invitation,
      invitationId: invitationId,
      currentOrgId: profile.currentOrg,
      fieldValue: 'accepted',
    })
  }

  rejectInvitation = async (invitationId) => {
    const { rejectInvitation, profile } = this.props
    await rejectInvitation({
      userEmail: profile?.email,
      invitationId: invitationId,
    })
  }


  render() {
    const { orgsInvitations } = this.props
    if (orgsInvitations?.length > 0) {
      return (
        <OrgStyles.InvitedToOrgsList>
          {
            orgsInvitations.map((invitation) => {
              return (
                this.renderInvitedToOrgItem(invitation)
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

  renderInvitedToOrgItem = (invitation) => {
    const invitationId = invitation?.invitationId
    return (
      <OrgStyles.InvitedToOrgItem key={invitation.invitationId}>
        <OrgStyles.InvitedToOrgName>You're invited to <span>{invitation.orgName}</span></OrgStyles.InvitedToOrgName>
        <Button
          onClick={() => this.rejectInvitation(invitationId)}
          children='Reject'
          bgColor='darkred'
          fontSize='12px'
          margin={false}
          color='white'
          width='40px'
          medium={true}
          disabled={false}
        />
        <Button
          onClick={() => this.acceptInvitation(invitation, invitationId)}
          children='Accept'
          bgColor='green'
          fontSize='12px'
          margin={false}
          color='white'
          width='40px'
          medium={true}
          disabled={false}
        />
      </OrgStyles.InvitedToOrgItem>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileState?.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInvitation: (data) => dispatch(updateInvitation(data)),
    rejectInvitation: (data) => dispatch(rejectInvitation(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitedToOrgsList);