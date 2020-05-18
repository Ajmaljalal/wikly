import React, { PureComponent } from 'react'
import { MenuBar, MenuItems } from './Menu.styles'
// import logo from './assests/logo.svg'
import meeting from './assests/meeting.svg'
import dashboard from './assests/dashboard.svg'
import tasks from './assests/tasks.svg'
import chat from './assests/chat.svg'
import documents from './assests/documents.svg'

import MenuButton from './MenuButton'

class Menu extends PureComponent {
  render() {
    console.log('Menu bar')
    return (
      <MenuBar>
        {/* <Logo><img src={logo} alt='logo'/></Logo> */}
        <MenuItems>
          <MenuButton icon={dashboard} path={'/dashboard'} />
          <MenuButton icon={meeting} path={'/meetings'} />
          <MenuButton icon={tasks} path={'/tasks'} />
          <MenuButton icon={documents} path={'/documents'} />
          <MenuButton icon={chat} path={'/chat-rooms'} />
        </MenuItems>
      </MenuBar>
    )
  }
}

export default Menu
