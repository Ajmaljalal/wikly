import React, { memo } from 'react'
import { ButtonWrapper } from './button.styles'

const Button = ({
  onClick,
  color,
  children,
}) => {
    return (
      <ButtonWrapper onClick={onClick} color={color}>
        {children}
      </ButtonWrapper>
    )
  
}

export default memo(Button)