import React, { memo } from 'react'
import { ButtonStyles } from './button.styles'

const Button = ({
  onClick,
  color,
  children,
  fontSize,
  bgColor,
  margin,
  width,
  disabled,
  large,
  medium,
  small
}) => {
  if (large) {
    return (
      <ButtonStyles.ButtonWrapperLarge
        onClick={onClick}
        bgColor={bgColor}
        color={color}
        size={fontSize}
        margin={margin}
        width={width}
        disabled={disabled}
      >
        {children}
      </ButtonStyles.ButtonWrapperLarge>
    )
  }
  if (medium) {
    return (
      <ButtonStyles.ButtonWrapperMedium
        onClick={onClick}
        bgColor={bgColor}
        color={color}
        size={fontSize}
        margin={margin}
        width={width}
        disabled={disabled}
      >
        {children}
      </ButtonStyles.ButtonWrapperMedium>
    )
  }
  if (small) {
    return (
      <ButtonStyles.ButtonWrapperSmall
        onClick={onClick}
        bgColor={bgColor}
        color={color}
        size={fontSize}
        margin={margin}
        width={width}
        disabled={disabled}
      >
        {children}
      </ButtonStyles.ButtonWrapperSmall>
    )
  }


}

export default memo(Button)