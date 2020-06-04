import React, { Component } from 'react'
import Button from '../../../components/button/Button'
import { OrgStyles } from './index.styles'

class Organization extends Component {
    render() {
        return (
            <OrgStyles.Container>
                <p>You are not a member of any org (organization) yet.</p>
                <p>Please contact the administrator in your organization to invite you to an existing org.</p>
                <p>-------------- OR -------------</p>
                <Button
                    onClick={this.createNewOrg}
                    children='Create your own org'
                    bgColor='green'
                    margin='20px'
                    color='white'
                    width='200px'
                />
            </OrgStyles.Container>
        )
    }
}

export default Organization;
