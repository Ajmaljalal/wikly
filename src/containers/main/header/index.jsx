import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../redux/authentications/authActions'
import { HeaderStyles } from './Header.styles'
import UserAvatar from './userAvatar'
import ActionsDropdown from '../../../components/actions-dropdown/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AppHeader extends PureComponent {


  render() {
    return (
      <HeaderStyles.HeaderContainer>
        <div></div>
        {this.renderUserAvatar()}
      </HeaderStyles.HeaderContainer>
    )
  }

  renderUserAvatar = () => {
    const { profile } = this.props
    const dropdownActions = [
      {
        element: this.renderSignoutBtn(),
        onClick: this.props.signOut
      }
    ]

    return (
      <HeaderStyles.UserAvatarWrapper>
        <UserAvatar profile={profile} status='online' />
        <HeaderStyles.UserName>{profile.name}</HeaderStyles.UserName>
        <ActionsDropdown actions={dropdownActions} />
      </HeaderStyles.UserAvatarWrapper>
    )
  }

  renderSignoutBtn = () => {
    return (
      <div>
        <FontAwesomeIcon icon='sign-out-alt' color="red"/>
        Sign Out
      </div>

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