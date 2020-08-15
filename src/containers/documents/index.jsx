import React, { Component } from 'react'
import Folder from './Folder'
import {  Container, BodyContainer, VerticalScrollAbleContainer } from '../../components/common.styles'
import ScreenTitle from '../../components/screen-title/index'

class Documents extends Component {
    render() {
        console.log('documents page')
        return (
            <BodyContainer>
                <ScreenTitle title ={'Documents'}/>
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