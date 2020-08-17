import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import firebase from '../../firebase/firebase-config'
import { getProfile } from '../../redux/userProfile/actions';
import { signIn, signUp } from '../../redux/authentications/authActions'
import { setCurrentOrg } from '../../redux/orgs/actions'
import { getProjects } from '../../redux/projects/actions'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import { LoginRegisterStyles } from './loginRegisterStyles'

class LoginRegister extends PureComponent {
  state = {
    FirtsName: '',
    LastName: '',
    Email: '',
    Password: '',
    screen: 'login',
  }

  toggleScreen = () => {
    this.setState({
      screen: this.state.screen === 'login' ? 'register' : 'login'
    })
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = async () => {
    const { profile, currentOrg, setCurrentOrg, getProjects } = this.props
    const { Email, Password } = this.state
    if (Email && Password) {
      await this.props.signIn({
        email: this.state.Email,
        password: this.state.Password
      })
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          await this.props.getProfile(user.uid)
          if (profile.currentOrg) await setCurrentOrg(profile.currentOrg)
          if (currentOrg) await getProjects(currentOrg.orgId)
        }
      })
    }
  }

  register = () => {
    const { FirstName, LastName, Email, Password } = this.state
    if (FirstName && Email && Password) {
      const user = { FirstName, LastName, Email, Password }
      this.props.signUp(user)
    }
  }


  render() {
    return (
      <LoginRegisterStyles.Container>
        <LoginRegisterStyles.InputsWrapper>
          {
            this.state.screen === 'login' ? this.renderLoginScreen() : this.renderRegisterScreen()
          }
        </LoginRegisterStyles.InputsWrapper>
      </LoginRegisterStyles.Container>
    )
  }

  renderRegisterScreen = () => {
    const { FirstName, LastName, Email, Password } = this.state
    return (
      <Fragment>
        {this.renderInput('FirstName', FirstName)}
        {this.renderInput('LastName', LastName)}
        {this.renderInput('Email', Email)}
        {this.renderInput('Password', Password)}
        {this.renderLoginRegisterButton('register', this.register)}
        {this.renderOrButton('Login HERE')}
      </Fragment>
    )
  }

  renderLoginScreen = () => {
    const { Email, Password } = this.state
    return (
      <Fragment>
        {this.renderInput('Email', Email)}
        {this.renderInput('Password', Password)}
        {this.renderLoginRegisterButton('login', this.login)}
        {this.renderOrButton('Register HERE')}
      </Fragment>
    )
  }

  renderInput = (name, value) => {
    return (
      <Input
        name={name}
        value={value}
        label={null}
        required='true'
        placeholder={name}
        width='250px'
        type={name === 'Password' ? 'password' : 'text'}
        onChange={this.handleInputChange}
      />
    )
  }

  renderLoginRegisterButton = (text, action) => {
    return (
      <Button
        onClick={action}
        children={text.toUpperCase()}
        bgColor='#2a4865'
        margin='20px'
        color='white'
        width='250px'
        disabled={false}
      />
    )
  }

  renderOrButton = (text) => {
    return (
      <Fragment>
        <LoginRegisterStyles.Separater>------------------- OR -------------------</LoginRegisterStyles.Separater>
        <Button
          onClick={this.toggleScreen}
          children={text}
          margin={true}
          color='#2a4865'
          width='250px'
          disabled={false}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ profileState, orgsState }) => {
  return {
    profile: profileState?.profile,
    currentOrg: orgsState?.current_org,
  }
}
const mapDispatchToProps = (disptach) => {
  return {
    signIn: (credentials) => disptach(signIn(credentials)),
    signUp: (user) => disptach(signUp(user)),
    getProfile: (userId) => disptach(getProfile(userId)),
    setCurrentOrg: (orgId) => disptach(setCurrentOrg(orgId)),
    getProjects: (orgId) => disptach(getProjects(orgId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
