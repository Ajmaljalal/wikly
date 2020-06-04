import React, { Component } from 'react'
// import { signIn } from '../../redux/authentications/authActions'
import Login from './Login'
import Registration from './Registration'

class Authentication extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Login />
                <Registration />
            </div>
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
