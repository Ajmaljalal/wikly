import React, { Fragment } from 'react'
import { OrgStyles } from './index.styles'
import Button from '../../../components/button/Button'
const InvitedToOrgsList = ({ orgsInvitations }) => {
  if (orgsInvitations?.length > 0) {
    return (
      <OrgStyles.InvitedToOrgsList>
        {
          orgsInvitations.map((org) => {
            return (
              renderInvitedToOrgItem(org)
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
const renderInvitedToOrgItem = (org) => {
  return (
    <OrgStyles.InvitedToOrgItem>
      <OrgStyles.InvitedToOrgName>You're invited to <span>{org.orgName}</span></OrgStyles.InvitedToOrgName>
      <Button
        onClick={()=>console.log('clicked')}
        children='Reject'
        bgColor='gray'
        fontSize='12px'
        margin={false}
        color='white'
        width='40px'
        disabled={false}
      />
      <Button
        onClick={()=>console.log('clicked')}
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

export default InvitedToOrgsList