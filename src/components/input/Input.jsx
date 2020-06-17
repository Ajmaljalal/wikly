import React, { PureComponent } from 'react'
import { InputStyles } from './input.styles'

class Input extends PureComponent {
  render() {
    const { placeholder, type, label, required, onChange, height, oneLine, name, selected, value, width } = this.props
    return (
      <InputStyles.Wrapper contentOnOneLine={oneLine} width ={width}>
        {label ? <InputStyles.Label>{label}</InputStyles.Label> : null}
        <InputStyles.InputField
          placeholder={placeholder}
          type={type}
          reqired={required}
          onChange={onChange}
          height={height}
          name={name}
          value={value}
          selected={selected}
        />
      </InputStyles.Wrapper>
    )
  }
}

export default Input;
