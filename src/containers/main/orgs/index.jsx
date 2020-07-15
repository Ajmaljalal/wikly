import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getOrgsInvitations } from '../../../redux/orgs/actions'
import Button from '../../../components/button/Button'
import NewOrg from './NewOrg'
import InvitedToOrgsList from './InvitedToOrgsList'
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
        {this.state.createNewOrg ? <NewOrg /> : this.renderInvitedOrgsListAndCreateNewOrgButton()}
      </OrgStyles.Container>
    )
  }

  renderInvitedOrgsListAndCreateNewOrgButton = () => {
    const { orgsInvitations } = this.props
    return (
      <OrgStyles.CreatNewOrg>
        <InvitedToOrgsList orgsInvitations={orgsInvitations} />
        <OrgStyles.OrSeparator>-------------- OR -------------</OrgStyles.OrSeparator>
        <Button
          onClick={this.toggleCreateNewOrg}
          children='Create your own org'
          bgColor='#2a4865'
          margin='20px'
          color='white'
          width='200px'
          disabled={false}
        />
      </OrgStyles.CreatNewOrg>
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

