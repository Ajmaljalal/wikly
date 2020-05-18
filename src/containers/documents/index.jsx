import React, { Component } from 'react'
import Folder from './Folder'
import {  Container, BodyContainer, VerticalScrollAbleContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class Documents extends Component {
    render() {
        console.log('documents page')
        return (
            <BodyContainer>
                <ContentHeader title ={'Documents'}/>
                <Container>
                    <VerticalScrollAbleContainer>
                        <Folder></Folder>
                        <Folder></Folder>
                    </VerticalScrollAbleContainer>
                </Container>
            </BodyContainer>
        )
    }
}

export default Documents;