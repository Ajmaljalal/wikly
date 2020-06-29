import React, { Component, Fragment } from 'react'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import { connect } from 'react-redux'
import { createNewOrg } from '../../../redux/orgs/orgActions'
import { NewOrgStyles } from './newOrg.styles'

class NewOrg extends Component {
  state = {
    screen: 'chooseName',
    name: '',
    project: ''

  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleScreen = () => {
    const { screen, name } = this.state
    if (screen === 'chooseName' && name) {
      this.setState({
        screen: 'details'
      })
    } else {
      this.setState({
        screen: 'chooseName'
      })
    }
  }

  createOrg = async () => {
    const { name, project } = this.state
    const projectName = project ? project : 'general'
    if (name) {
      const newOrg = { name, projectName }
      // const newProject = { name }
      await this.props.createNewOrg(newOrg)
      // await this.props.createNewProject(newProject)
    }
  }

  render() {
    return (
      this.renderCurrentScreen()
    )
  }

  renderCurrentScreen = () => {
    const { screen } = this.state
    switch (screen) {
      case 'chooseName':
        return this.renderChoseOrgName()
      case 'details':
        return this.renderDetails()
      default:
        break
    }
  }

  renderChoseOrgName = () => {
    return (
      <NewOrgStyles.Container height='300px'>
        <NewOrgStyles.Headings>
          <NewOrgStyles.HeadingOne>Enter a name for your organization</NewOrgStyles.HeadingOne>
          <NewOrgStyles.HeadingTwo>and replace several tools with just one.</NewOrgStyles.HeadingTwo>
        </NewOrgStyles.Headings>
        <Input
          name='name'
          value={this.state.name}
          label={null}
          required='true'
          placeholder='Enter a name for your org'
          width='390px'
          onChange={this.handleInputChange}
        />
        <NewOrgStyles.Policy>
          By clicking to continue you accept our
					<a href='#'> terms</a> and
					<a href='#'> privacy policy</a>
        </NewOrgStyles.Policy>
        <Button
          onClick={this.toggleScreen}
          children='CONTINUE'
          bgColor='#2a4865'
          margin='20px'
          color='white'
          width='390px'
          disabled={this.state.name ? false : true}
        />
      </NewOrgStyles.Container>
    )
  }

  renderDetails = () => {
    return (
      <NewOrgStyles.Container height='300px'>
        <NewOrgStyles.Headings>
          <NewOrgStyles.HeadingOne>{`Welcome to ${this.state.name.toUpperCase()}`}</NewOrgStyles.HeadingOne>
        </NewOrgStyles.Headings>
        <NewOrgStyles.Headings>
          <NewOrgStyles.HeadingOne>One more step and you are all set</NewOrgStyles.HeadingOne>
        </NewOrgStyles.Headings>
        <Input
          name='project'
          value={this.state.project}
          label='Your first project (optional)'
          required='true'
          placeholder='Enter a name for a project, default to "general".'
          width='390px'
          onChange={this.handleInputChange}
        />
        {/* <Input
					name='typeOfbusiness'
					value={this.state.typeOfbusiness}
					label={'Type of your business:'}
					required='true'
					placeholder='Select type of business'
					width='390px'
					onChange={this.handleInputChange}
				/>
				<Input
					name='name'
					value={this.state.name}
					label={'Type of your organization:'}
					required='true'
					placeholder='Enter a name for your org'
					width='390px'
					onChange={this.handleInputChange}
				/>
				<Input
					name='name'
					value={this.state.name}
					label={'Type of your organization:'}
					required='true'
					placeholder='Enter a name for your org'
					width='390px'
					onChange={this.handleInputChange}
				/> */}
        <Button
          onClick={this.createOrg}
          children='GO'
          bgColor='#2a4865'
          margin='20px'
          color='white'
          width='390px'
          disabled={this.state.name ? false : true}
        />
      </NewOrgStyles.Container>
    )
  }
}

const mapDispatchToProps = (disptach) => {
  return {
    createNewOrg: (org) => disptach(createNewOrg(org))
  }
}
export default connect(null, mapDispatchToProps)(NewOrg);

