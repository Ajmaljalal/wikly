import React, { Component } from 'react'
import {  Container, BodyContainer } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

class Documents extends Component {
    render() {
        console.log('documents page')
        return (
            <BodyContainer>
                <ContentHeader title ={'Documents'}/>
                <Container>
                    {'content here'}
                </Container>
            </BodyContainer>
        )
    }
}

export default Documents;