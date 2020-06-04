import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../redux/authentications/authActions'

class Login extends PureComponent {

    login = () => {
        this.props.signIn({
        email: 'ajmaljalal58@gmail.com',
        password: '12345678'
        })
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password' />
                <button onClick={this.login}>sign in</button>
            </div>
        )
    }
}

const mapDispatchToProps = (disptach, ownProps) => {
    return {
      signIn: (credentials) => disptach(signIn(credentials))
    }
}

export default connect(null, mapDispatchToProps)(Login);
