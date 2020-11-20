import React, { PureComponent } from 'react'
import onClickOutside from "react-onclickoutside";
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionsDropdownStyles } from './actions-dropdown.styles'

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
    if (e.clientX > 400) {
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
    const { img, text, icon } = this.props
    const image = img ? <img src={img} alt='dropdownlist icon' /> : null
    const textWithIcon = icon ? <div>{text}    <FontAwesomeIcon icon={icon} color='white' size='1x' /></div> : null
    const isRound = text ? false : true
    return (
      <ActionsDropdownStyles.Container
        ref={this.container}
        onClick={this.toggleDropdown}
        isHover={!img}
        isRound={isRound}
        border={img ? true : false}
      >
        {img ? image : textWithIcon}
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
    icon: PropTypes.string,
    text: PropTypes.string
  }
}

export default onClickOutside(ActionsDropdown)

