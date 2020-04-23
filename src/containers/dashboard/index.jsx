import React, { Component } from 'react'
import {  BodyContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class Dashboard extends Component {
    render() {
        console.log('dashboard page')
        return (
            <BodyContainer>
                <ContentHeader title ={'Dashboard'}/>
            </BodyContainer>
        )
    }
}

export default Dashboard;