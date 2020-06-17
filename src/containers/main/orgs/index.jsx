import React, { Component, Fragment } from 'react'
import Button from '../../../components/button/Button'
import NewOrg from './NewOrg'
import { OrgStyles } from './index.styles'

class Organization extends Component {
	state = {
		createNewOrg: false
	}

	toggleCreateNewOrg = () => {
		this.setState({
			createNewOrg: true
		})
	}
	render() {
		return (
			<OrgStyles.Container>
				<OrgStyles.Logo>WIKLI</OrgStyles.Logo>
				{this.state.createNewOrg ? <NewOrg /> : this.renderCreateNewOrgButton()}
			</OrgStyles.Container>
		)
	}

	renderCreateNewOrgButton = () => {
		return (
			<Fragment>
				<p>You are not a member of any org (organization) yet.</p>
				<p>Please contact the administrator in your organization to invite you to an existing org.</p>
				<p>-------------- OR -------------</p>
				<Button
					onClick={this.toggleCreateNewOrg}
					children='Create your own org'
					bgColor='green'
					margin='20px'
					color='white'
					width='200px'
					disabled='false'
				/>
			</Fragment>
		)
	}
}

export default Organization;
