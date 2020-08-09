import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BodyContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class Dashboard extends Component {
  render() {
    console.log('dashboard page')
    return (
      <BodyContainer>
        <ContentHeader title='dashboard' />
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