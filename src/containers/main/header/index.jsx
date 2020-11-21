import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../components/button/Button';
import ActionsDropdown from '../../../components/actions-dropdown/index'
import { signOut } from '../../../redux/authentications/authActions'
import { setCurrentOrg } from '../../../redux/orgs/actions'
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
          medium={true}
          onClick={() => console.log('clicked')}
        >
          Create
        </Button>
      </HeaderStyles.Middle>
    )
  }

  renderHeaderContainerLeft = () => {
    const { currentProject } = this.props
    const currentProjectSettings = [
      {
        element: this.renderDropDownListItem('Change project', 'exchange-alt', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('See all projects', 'folder-open', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Add a project', 'plus', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Project settings', 'cog', 'black'),
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
        <HeaderStyles.OrgLogoWrapper>
          {this.renderCurrentOrgLogo()}
        </HeaderStyles.OrgLogoWrapper>
        <HeaderStyles.CurrentProject>
          {this.renderActionsDropdown(currentProjectSettings, `${currentProject?.name}`)}
        </HeaderStyles.CurrentProject>
        <HeaderStyles.ProjectTeam>
          {this.renderActionsDropdown(projectTeam, 'People')}
        </HeaderStyles.ProjectTeam>
      </HeaderStyles.Left>
    )
  }

  renderCurrentOrgLogo = () => {
    const { currentOrg } = this.props
    if (currentOrg) {
      return (
        <HeaderStyles.OrgLogo>
          <img src={currentOrg.logo} alt='org logo' />
          <HeaderStyles.OrgName>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {this.renderActionsDropdown(this.renderUsersOrgsDropdownActionsList(), currentOrg.name)}
            </span>
          </HeaderStyles.OrgName>
        </HeaderStyles.OrgLogo>
      )
    }
  }

  renderUsersOrgsDropdownActionsList = () => {
    const { setCurrentOrg, currentOrg } = this.props
    const dropdownActions = [
      {
        element: <div>{`${currentOrg.name}`}</div>,
        onClick: () => setCurrentOrg('org.orgId')
      },
      {
        element: this.renderDropDownListItem('Members', 'users', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Invite new member', 'user-plus', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Settings', 'cog', 'black'),
        action: this.signOut
      },
      {
        element: this.renderDropDownListItem('Change org', 'dice-two', 'black'),
        action: this.signOut
      },
    ]
    return dropdownActions
  }

  renderActionsDropdown = (actions, text) => {
    return (
      <ActionsDropdown
        actions={actions}
        text={text}
        icon='caret-down'
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
        <ActionsDropdown actions={dropdownActions} icon='caret-down' />
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

const mapStateToProps = ({ profileState, orgsState, projectsState }) => {
  return {
    profile: profileState?.profile,
    currentOrg: orgsState.current_org,
    projects: projectsState.projects,
    currentProject: projectsState.current_project
  }
}

const mapDispatchToProps = (disptach, ownProps) => {
  return {
    signOut: () => disptach(signOut()),
    setCurrentOrg: (orgId) => disptach(setCurrentOrg(orgId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);