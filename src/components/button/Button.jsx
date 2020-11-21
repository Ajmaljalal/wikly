import React, { memo } from 'react'
import { PropTypes } from 'prop-types';
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
Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  bgColor: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
}

export default memo(Button)