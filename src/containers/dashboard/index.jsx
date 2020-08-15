import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BodyContainer } from '../../components/common.styles'
import ScreenTitle from '../../components/screen-title/index'

class Dashboard extends Component {
  render() {
    console.log('dashboard page')
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

export default connect(mapStateToProps)(Dashboard);