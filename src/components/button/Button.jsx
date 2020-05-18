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


}) => {
    return (
      <ButtonWrapper
        onClick={onClick}
        bgColor={bgColor}
        color={color}
        size={fontSize}
        margin={margin}
        width={width}
      >
        {children}
      </ButtonWrapper>
    )
  
}

export default memo(Button)