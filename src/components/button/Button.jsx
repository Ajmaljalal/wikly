import React, { memo } from 'react'
import { ButtonWrapper } from './button.styles'

const Button = ({
  onClick,
  color,
  children,
  size,
  bgColor,

}) => {
    return (
      <ButtonWrapper onClick={onClick} bgColor={bgColor} color={color} size={size}>
        {children}
      </ButtonWrapper>
    )
  
}

export default memo(Button)