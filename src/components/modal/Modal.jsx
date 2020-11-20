import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import closeIcon from '../../assets/icons/close.svg'
import { ModalStyles } from './modal.styles'

const Modal = ({
  children,
  buttons,
  onClose,
  withHeader,
  headerText,
  width,
  height,
  headerBg
}) => {
  return (
    <ModalStyles.Overlay>
      <ModalStyles.Content width={width} height={height}>
        {withHeader && <ModalStyles.Header bg={headerBg}>
          {headerText}
          {/* <img src={closeIcon} alt='close-icon' onClick={onClose}/> */}
          <FontAwesomeIcon icon='times' onClick={onClose} size='lg'/>
        </ModalStyles.Header>}
        <ModalStyles.Body>{children}</ModalStyles.Body>
        <ModalStyles.Buttons>{buttons}</ModalStyles.Buttons>
      </ModalStyles.Content>
    </ModalStyles.Overlay>
  )
}
Modal.propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  withHeader: PropTypes.bool,
  headerText: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  headerBg: PropTypes.string
}


export default Modal;
