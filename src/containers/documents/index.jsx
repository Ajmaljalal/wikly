import React, { Component } from 'react'
import {  BodyContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class Documents extends Component {
    render() {
        console.log('documents page')
        return (
            <BodyContainer>
                <ContentHeader title ={'Documents'}/>
            </BodyContainer>
        )
    }
}

export default Documents;