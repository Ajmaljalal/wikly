import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import closeIcon from '../../assets/icons/close.svg'
import {
  ModalStyles
} from './modal.styles'

const Modal = ({
  children,
  onClose,
  withHeader,
  headerText,
  siz,
}) => {
  return (
    <ModalStyles.Overlay>
      <ModalStyles.Content>
        <ModalStyles.Header>
          {headerText}
          {/* <img src={closeIcon} alt='close-icon' onClick={onClose}/> */}
          <FontAwesomeIcon icon='times' onClick={onClose}/>
        </ModalStyles.Header>
        <ModalStyles.Body>
          {children}
        </ModalStyles.Body>
      </ModalStyles.Content>
    </ModalStyles.Overlay>
  )
}

export default Modal;
