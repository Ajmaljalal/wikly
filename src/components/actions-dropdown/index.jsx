import React, { PureComponent } from 'react'
import onClickOutside from "react-onclickoutside";
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionsDropdownStyles } from './actions-dropdown.styles'


/**
 * @param {Array} actions
 * @param {String} img
 */
class ActionsDropdown extends PureComponent {

  state = {
    open: false
  }
  container = React.createRef()
  setClickOutsideRef = () => this.container.current
  handleClickOutside = (evt) => {
    this.setState({
      open: false,
      isLeft: false,
      isBottom: false
    })
  }

  toggleDropdown = (e) => {
    let left
    let bottom
    if (e.clientX > 700) {
      left = false
    } else left = true
    if (e.clientY > 430) {
      bottom = true
    } else bottom = false
    this.setState({
      open: !this.state.open,
      isLeft: left,
      isBottom: bottom
    })
  }

  render() {
    const { open } = this.state
    const { img, text } = this.props
    const icon = img ? <img src={img} alt='dropdownlist icon' /> : <FontAwesomeIcon icon='ellipsis-v' color='white' />
    const isIcon = text ? false : true
    return (
      <ActionsDropdownStyles.Container
        ref={this.container}
        onClick={this.toggleDropdown}
        isHover={!img}
        isIcon={isIcon}
      >
        {isIcon ? icon : text}
        {open ? this.renderDropdownMenu() : null}
      </ActionsDropdownStyles.Container>
    )
  }

  renderDropdownMenu = () => {
    const { isLeft, isBottom } = this.state
    return (
      <ActionsDropdownStyles.Menu
        left={isLeft}
        bottom={isBottom}
      >
        {this.renderDropDownMenuItems()}
      </ActionsDropdownStyles.Menu>
    )
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

  static propTypes = {
    actions: PropTypes.array,
    img: PropTypes.string,
    text: PropTypes.string
  }
}

export default onClickOutside(ActionsDropdown)

