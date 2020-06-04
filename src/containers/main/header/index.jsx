import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../redux/authentications/authActions'
import { HeaderContainer } from './Header.styles'

class AppHeader extends PureComponent {
    render() {
        return (
            <HeaderContainer>
                <button onClick={this.props.signOut}>Sign out</button>
            </HeaderContainer>
        )
    }
}

const mapStateToProps = ({ firebase, firestore }) => {
    return {
      profile: firebase?.profile,
    }
}

const mapDispatchToProps = (disptach, ownProps) => {
    return {
      signOut: () => disptach(signOut())
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(AppHeader);