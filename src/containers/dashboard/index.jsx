import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  BodyContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'
import DropdownList from '../../components/dropdown-list/DropdownList'

class Dashboard extends Component {
    render() {
        console.log('dashboard page')
        return (
            <BodyContainer>
                <ContentHeader title={`welcome ${this.props.profile.name}`} />
                <DropdownList/>
            </BodyContainer>
        )
    }
}

const mapStateToProps = ({ firebase }) => {
    return {
      profile: firebase.profile
    }
  }

export default connect(mapStateToProps)(Dashboard);