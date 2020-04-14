import React, { Component } from 'react'

import { 
    Container, 
    CloseButton,
} from './meetingDetails.styles'

import closeIcon from './assets/close.svg'

export default class MeetingDetails extends Component {
    render() {
        const { onClose } = this.props
        return (
            <Container>
                <CloseButton>
                    <div onClick={onClose}>
                        <img src={closeIcon} alt='close icon'/>
                    </div>
                </CloseButton>
            </Container>
        )
    }
}
