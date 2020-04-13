import React, { Component } from 'react'
import {  ContentBody } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class Documents extends Component {
    render() {
        console.log('documents page')
        return (
            <ContentBody>
                <ContentHeader title ={'Documents'}/>
            </ContentBody>
        )
    }
}

export default Documents;