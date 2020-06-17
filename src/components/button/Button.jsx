import React, { memo } from 'react'
import { ButtonWrapper } from './button.styles'

const Button = ({
  onClick,
  color,
  children,
  fontSize,
  bgColor,
  margin,
  width,
  disabled,


}) => {
    return (
      <ButtonWrapper
        onClick={onClick}
        bgColor={bgColor}
        color={color}
        size={fontSize}
        margin={margin}
        width={width}
        disabled={disabled}
      >
        {children}
      </ButtonWrapper>
    )
  
}

export default memo(Button)