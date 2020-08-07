import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ActionsDropdownStyles } from './actions-dropdown.styles'


/**
 * @param actions array required
 */
class ActionsDropdown extends Component {

  state = {
    open: false
  }
  container = React.createRef()
  setClickOutsideRef = () => this.container.current 
  handleClickOutside = (evt) => {
    this.setState({
      open: false,
      isLeft: false,
    })
  }

  toggleDropdown = (e) => {
    let left
    if (e.screenX > 1000) {
      left = false
    } else left = true

    this.setState({
      open: !this.state.open,
      isLeft: left
    })
  }

  render() {
    const { open } = this.state
    return (
      <ActionsDropdownStyles.Container
        ref={this.container}
        onClick={this.toggleDropdown}
      >
        <FontAwesomeIcon icon='ellipsis-v' color='white'/>
        {open? this.renderDropdownMenu() : null}
      </ActionsDropdownStyles.Container>
    )
  }

  renderDropdownMenu = () => {
    const { isLeft } = this.state
    return <ActionsDropdownStyles.Menu left={isLeft}>
      {this.renderDropDownMenuItems()}
    </ActionsDropdownStyles.Menu>
  }

  renderDropDownMenuItems = () => {
    const { actions } = this.props
    return actions.map((action, index) => {
      return (
        <ActionsDropdownStyles.MenuItem
          key={index}
          onClick={action.onClick}
        >
          <ActionsDropdownStyles.MenuItemLabel>
            {action.element}
          </ActionsDropdownStyles.MenuItemLabel>
        </ActionsDropdownStyles.MenuItem>
      )
    })
  }
}

export default onClickOutside(ActionsDropdown)

