import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { setCurrentOrg } from '../../redux/orgs/actions'
import { BodyContainer } from '../../components/common.styles'
import ScreenTitle from '../../components/screen-title/index'

class Dashboard extends Component {

  render() {
    return (
      <BodyContainer>
        <ScreenTitle title='Dashboard' />
      </BodyContainer>
    )
  }
}

const mapStateToProps = ({ profileState }) => {
  return {
    profile: profileState.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setCurrentOrg: (orgId) => dispatch(setCurrentOrg(orgId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);