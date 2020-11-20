import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tippy from '@tippyjs/react';
import { changeCurrentAppScreen } from '../../../redux/application/actions'
import meeting from './assests/nullIcon.svg'
import dashboard from './assests/dashboard.svg'
import tasks from './assests/tasks.svg'
import chat from './assests/chat.svg'
import documents from './assests/documents.svg'
import MenuButton from './MenuButton'
import { MenuStyles } from './Menu.styles'

class Menu extends PureComponent {

  checkCurrentScreen = (currentScreen, buttonLabel) => {
    return currentScreen === buttonLabel
  }

  changeCurrentScreen = (screen) => {
    this.props.changeCurrentAppScreen(screen)
  }

  render() {
    return (
      <MenuStyles.MenuBar>
        {this.renderMenuBtns()}
      </MenuStyles.MenuBar>
    )
  }

  renderMenuBtns = () => {
    const { currentScreen } = this.props
    const menuButtons = [
      {
        icon: dashboard,
        label: 'dashboard',
        path: '/dashboard'
      },
      {
        icon: meeting,
        label: 'meetings',
        path: '/meetings'
      },
      {
        icon: tasks,
        label: 'tasks',
        path: '/tasks'
      },
      {
        icon: documents,
        label: 'documents',
        path: '/documents'
      },
      {
        icon: chat,
        label: 'chat',
        path: '/chat'
      },
    ]
    return (
      <MenuStyles.MenuItemsTop>
        {menuButtons.map((button, index) => {
          return (
            <Tippy placement='right' content={button.label.toUpperCase()} className='tippy-tooltip' key={index}>
              <span>
                <MenuButton
                  onClick={this.changeCurrentScreen}
                  icon={button.icon}
                  isActive={this.checkCurrentScreen(currentScreen, button.label)}
                  path={button.path}
                />
              </span>
            </Tippy>
          )
        })}
      </MenuStyles.MenuItemsTop>
    )
  }

}


const mapStateToProps = ({ profileState, orgsState, applicationState }) => {
  return {
    profile: profileState.profile,
    currentOrg: orgsState.current_org,
    currentScreen: applicationState.current_screen
  }
}
const mapDispatchToProps = (disptach, ownProps) => {
  return {
    changeCurrentAppScreen: (screen) => disptach(changeCurrentAppScreen(screen)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
