import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../components/button/Button';
import ActionsDropdown from '../../../components/actions-dropdown/index'
import { signOut } from '../../../redux/authentications/authActions'
import { HeaderStyles } from './Header.styles'
import UserAvatar from './userAvatar'
import { Colors } from './../../../assets/colors';

class AppHeader extends PureComponent {


  render() {
    return (
      <HeaderStyles.HeaderContainer>
        {this.renderHeaderContainerLeft()}
        {this.renderUserAvatar()}
      </HeaderStyles.HeaderContainer>
    )
  }

  renderHeaderContainerLeft = () => {
    const dropdownActions = [
      {
        element: this.renderSignoutBtn(),
        onClick: this.props.signOut
      }
    ]
    const burgerMenu = <FontAwesomeIcon icon='bars' size='3x' />
    return (
      <HeaderStyles.Left>
        {/* <ActionsDropdown actions={dropdownActions} img={burgerMenu}/> */}
        <HeaderStyles.CurrentProject>
          {this.renderActionsDropdown(dropdownActions, 'Project: wikli dev')}
        </HeaderStyles.CurrentProject>
        <HeaderStyles.ProjectSettings>
          {this.renderActionsDropdown(dropdownActions, 'Project settings')}
        </HeaderStyles.ProjectSettings>
        <HeaderStyles.ProjectTeam>
          {this.renderActionsDropdown(dropdownActions, 'Project team')}
        </HeaderStyles.ProjectTeam>
        <Button
          color={Colors["wikli-color-primary-dark"]}
          bgColor={Colors["wikli-color-white-alpha-95"]}
          fontSize='12px'
          margin={false}
          medium={true}
          onClick={() => console.log('clicked')}
        >
          {'Create'}
        </Button>
      </HeaderStyles.Left>
    )
  }

  renderActionsDropdown = (actions, text) => {
    return (
      <ActionsDropdown
        actions={actions}
        text={text}
      />
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
        <FontAwesomeIcon icon='sign-out-alt' color="red" />
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