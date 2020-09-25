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
        {this.renderHeaderContainerMiddle()}
        {this.renderUserAvatar()}
      </HeaderStyles.HeaderContainer>
    )
  }

  renderHeaderContainerMiddle = () => {
    return (
      <HeaderStyles.Middle>
        <Button
          color={Colors["wikli-color-primary-dark"]}
          bgColor={Colors["wikli-color-white-alpha-95"]}
          fontSize='12px'
          margin={false}
          medium={true}
          onClick={() => console.log('clicked')}
        >
          Create
        </Button>
        {/* <Button
          color={Colors["wikli-color-primary-dark"]}
          bgColor={Colors["wikli-color-white-alpha-95"]}
          fontSize='12px'
          margin={false}
          medium={true}
          width='120px'
          onClick={() => console.log('clicked')}
        >
          Add new project
        </Button> */}
      </HeaderStyles.Middle>
    )
  }

  renderHeaderContainerLeft = () => {
    const { currentProject } = this.props
    const currentProjectSettings = [
      {
        element: this.renderDropDownListItem('Project settings', 'cog', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Change project', 'exchange-alt', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('See all project', 'folder-open', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Add a project', 'plus', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem(`Current: ${currentProject?.name}`, 'no-icon', 'black'),
        action: this.signOut
      }
    ]

    const projectTeam = [
      {
        element: this.renderDropDownListItem('View all members', 'users', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Add/delete member', 'user-plus', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Manage roles', 'user-lock', 'black'),
        action: this.signOut
      }
    ]

    return (
      <HeaderStyles.Left>
        <HeaderStyles.CurrentProject>
          {this.renderActionsDropdown(currentProjectSettings, `${currentProject?.name}`)}
        </HeaderStyles.CurrentProject>
        {/* <HeaderStyles.ProjectSettings>
          {this.renderActionsDropdown(dropdownActions, 'Project settings')}
        </HeaderStyles.ProjectSettings> */}
        <HeaderStyles.ProjectTeam>
          {this.renderActionsDropdown(projectTeam, 'People')}
        </HeaderStyles.ProjectTeam>
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
        element: this.renderDropDownListItem('Sign out', 'sign-out-alt', 'red'),
        onClick: this.props.signOut
      }
    ]
    return (
      <HeaderStyles.Right>
        <UserAvatar profile={profile} status='online' />
        <HeaderStyles.UserName>{profile.name}</HeaderStyles.UserName>
        <ActionsDropdown actions={dropdownActions} />
      </HeaderStyles.Right>
    )
  }

  renderDropDownListItem = (text, icon, iconColor) => {
    return (
      <div>
        <FontAwesomeIcon icon={icon} color={iconColor} />
        {text}
      </div>
    )
  }


}

const mapStateToProps = ({ profileState, projectsState }) => {
  return {
    profile: profileState?.profile,
    projects: projectsState.projects,
    currentProject: projectsState.current_project
  }
}

const mapDispatchToProps = (disptach, ownProps) => {
  return {
    signOut: () => disptach(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);