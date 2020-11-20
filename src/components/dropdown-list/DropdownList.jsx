import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import onClickOutside from "react-onclickoutside";
import { DropdownStyles } from './dropdown.styles'

class DropdownList extends Component {
  state = {
    isOpen: false
  }

  // lines 11-18 are needed for onClickOutside 
  container = React.createRef()
  setClickOutsideRef = () => this.container.current // this is necessiary for removing findDOMNode deprication warning 
  handleClickOutside = (evt) => {
    this.setState({
      isOpen: false
    })
  }

  toggleDropDown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { width, placeholder, searchAble, handleSearch, value } = this.props
    return (
      <DropdownStyles.Container width={width} ref={this.container}>
        <DropdownStyles.Header onClick={this.toggleDropDown}>
          <DropdownStyles.Search placeholder={placeholder} disabled={!searchAble} onChange={handleSearch} value={value}/>
          <DropdownStyles.Arrow>
            <FontAwesomeIcon icon='plus' size='sm' />
          </DropdownStyles.Arrow>
        </DropdownStyles.Header>
        {this.renderBody()}
      </DropdownStyles.Container>
    )
  }

  renderBody = () => {
    const { children, position, closeOnClick } = this.props
    if (this.state.isOpen) {
      return (
        <DropdownStyles.Body onClick={closeOnClick ? this.toggleDropDown : null} position={position}>
          {children}
        </DropdownStyles.Body>
      )
    } else return null
  }

  static propTypes = {
    width: PropTypes.string, 
    placeholder: PropTypes.string, 
    searchAble: PropTypes.bool, 
    handleSearch: PropTypes.func, 
    value: PropTypes.string
  }
}

export default onClickOutside(DropdownList)
