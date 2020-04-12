import React, { Component } from 'react'
import {  ContentBody } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class Dashboard extends Component {
    render() {
        console.log('dashboard page')
        return (
            <ContentBody>
                <ContentHeader title ={'Dashboard'}/>
            </ContentBody>
        )
    }
}

export default Dashboard;