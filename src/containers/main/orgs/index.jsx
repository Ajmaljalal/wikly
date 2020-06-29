import React, { Component, Fragment, Profiler } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
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
        <p>You are not invited to any org (organization) yet.</p>
        <p>Please contact someone in your work place to invite you to an existing org.</p>
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
}

const mapStateToProps = ({ firebase, firestore }) => {
  return {
    invitationsToOrgs: firestore.data.invitationsToOrgs,
    profile: firebase
    // orgs: firestore.data.orgs
  }
}

export default compose(
  firestoreConnect((state) => 
    [{
      collection: 'invitations-to-orgs',
      doc: 'ajmaljalal58@gmail.com',
      subcollections: [{ collection: 'invitations' }],
      storeAs: 'invitationsToOrgs'
    }]
  ),
  connect(mapStateToProps))(Organization);

// export default Organization;
