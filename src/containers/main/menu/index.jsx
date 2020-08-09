import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCurrentAppScreen } from '../../../redux/application/actions'
import Tippy from '@tippyjs/react';
import meeting from './assests/meeting.svg'
import dashboard from './assests/dashboard.svg'
import tasks from './assests/tasks.svg'
import chat from './assests/chat.svg'
import documents from './assests/documents.svg'
import MenuButton from './MenuButton'
import { MenuStyles } from './Menu.styles'

class Menu extends PureComponent {

  checkCurrentScreen = (currentScreen, buttonLable) => {
    return currentScreen === buttonLable
  }

  changeCurrentScreen = (screen) => {
    this.props.changeCurrentAppScreen(screen)
  }

  render() {
    const { currentOrg, currentScreen } = this.props
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
      <MenuStyles.MenuBar>
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
        <MenuStyles.MenuItemsBottom>
          <Tippy placement='right' content={`Current org: ${currentOrg.name}`} className='tippy-tooltip'>
            <span>
              <MenuButton
                onClick={()=>console.log('clicked')}
                icon={currentOrg.logo}
                path={null}
              />
            </span>
          </Tippy>
        </MenuStyles.MenuItemsBottom>
      </MenuStyles.MenuBar>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentOrg: { name: 'ajmal' },
    currentScreen: state.applicationState.current_screen
  }
}
const mapDispatchToProps = (disptach, ownProps) => {
  return {
    changeCurrentAppScreen: (screen) => disptach(changeCurrentAppScreen(screen))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
