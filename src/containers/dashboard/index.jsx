import React, { Component } from 'react'
import {  BodyContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'
import DropdownList from '../../components/dropdown-list/DropdownList'

class Dashboard extends Component {
    render() {
        console.log('dashboard page')
        return (
            <BodyContainer>
                <ContentHeader title={'Dashboard'} />
                <DropdownList/>
            </BodyContainer>
        )
    }
}

export default Dashboard;