import React, { Component } from 'react'
// import { signIn } from '../../redux/authentications/authActions'
import LoginRegister from './LogingRegister'
import { AuthStyles } from './index.styles'

class Authentication extends Component {
	state = {
		screen: 'login'
	}

	toggleScreen = () => {
		this.setState({
			screen: this.state.screen === 'login' ? 'register' : 'login'
		})
	}
	render() {
		return (
			<AuthStyles.Container>
				<LoginRegister />
				<AuthStyles.ImageHolder ></AuthStyles.ImageHolder>
			</AuthStyles.Container>
		)
	}
}

// const mapStateToProps = ({ firebase }) => {
//     return {
//       user: firebase.auth,
//       profile: firebase.profile
//     }
//   }
//   const mapDispatchToProps = (disptach, ownProps) => {
//     return {
//       signIn: (credentials) => disptach(signIn(credentials))
//     }
//   }

// export default compose(
//   // firebaseConnect(),
//   connect(mapStateTopProps, mapDispatchToProps
//   ))(Main);

export default Authentication;
//   export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
