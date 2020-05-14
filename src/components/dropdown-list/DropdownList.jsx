import React, { Component } from 'react'
import arrowDownIcon from '../../assets/icons/caret-down.svg'
import { DropdownStyles } from './dropdown.styles'

class DropdownList extends Component {
  state = {
    isOpen: false
  }

  toggleDropDown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { width } = this.props
    return (
      <DropdownStyles.Container width={width}>
        <DropdownStyles.Header onClick={this.toggleDropDown}>
          <DropdownStyles.Search placeholder={'Select users'}/>
          <DropdownStyles.Arrow>
            <img src={arrowDownIcon} alt='dropdown-menu-icon' />
          </DropdownStyles.Arrow>
        </DropdownStyles.Header>
        {this.renderBody()}
      </DropdownStyles.Container>
    )
  }

  renderBody = () => {
    const { children, position } = this.props
    if (this.state.isOpen) {
      return (
        <DropdownStyles.Body onClick={this.toggleDropDown} position={position}>
          {children}
        </DropdownStyles.Body>
      )
    } else return null
  }
}

export default DropdownList
