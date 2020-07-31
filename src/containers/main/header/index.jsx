import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../redux/authentications/authActions'
import { HeaderStyles } from './Header.styles'
import UserAvatar from './userAvatar'

class AppHeader extends PureComponent {
  render() {
    return (
      <HeaderStyles.HeaderContainer>
        <button onClick={this.props.signOut}>Sign out</button>
        {this.renderUserAvatar()}
      </HeaderStyles.HeaderContainer>
    )
  }

  renderUserAvatar = () => {
    const { profile } = this.props
    return (
      <HeaderStyles.UserAvatarWrapper>
        <UserAvatar profile={profile} status='online' />
        {profile.name}
      </HeaderStyles.UserAvatarWrapper>
    )
  }
}

const mapStateToProps = ({ profileState }) => {
  return {
    profile: profileState?.profile,
  }
}

const mapDispatchToProps = (disptach, ownProps) => {
  return {
    signOut: () => disptach(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);