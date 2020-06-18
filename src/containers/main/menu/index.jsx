import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tippy from '@tippyjs/react';
import meeting from './assests/meeting.svg'
import dashboard from './assests/dashboard.svg'
import tasks from './assests/tasks.svg'
import chat from './assests/chat.svg'
import documents from './assests/documents.svg'
import MenuButton from './MenuButton'
import { MenuStyles } from './Menu.styles'

class Menu extends PureComponent {
  render() {
    const { currentOrg } = this.props
    return (
      <MenuStyles.MenuBar>
        <MenuStyles.MenuItemsTop>
          <Tippy content='Dashboard' className='tippy-tooltip'><span><MenuButton icon={dashboard} path={'/dashboard'} /></span></Tippy>
          <Tippy content='Meetings' className='tippy-tooltip'><span><MenuButton icon={meeting} path={'/meetings'} /></span></Tippy>
          <Tippy content='Tasks' className='tippy-tooltip'><span><MenuButton icon={tasks} path={'/tasks'} /></span></Tippy>
          <Tippy content='Documents' className='tippy-tooltip'><span><MenuButton icon={documents} path={'/documents'} /></span></Tippy>
          <Tippy content='Chat Rooms' className='tippy-tooltip'><span><MenuButton icon={chat} path={'/chat-rooms'} /></span></Tippy>
        </MenuStyles.MenuItemsTop>
        <MenuStyles.MenuItemsBottom>
          <Tippy content={`Current org: ${currentOrg.name}`} className='tippy-tooltip'><span><MenuButton icon = {currentOrg.logo} /></span></Tippy>
          {/* <MenuButton icon = {''} /> */}
        </MenuStyles.MenuItemsBottom>
      </MenuStyles.MenuBar>
    )
  }
}


const mapStateToProps = ({ firestore, firebase }) => {
  return { 
    currentOrg: firestore.data.orgs[firebase.profile?.currentOrg]
  }
}
export default connect(mapStateToProps)(Menu);
