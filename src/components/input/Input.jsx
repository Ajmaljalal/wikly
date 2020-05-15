import React, { PureComponent } from 'react'
import { InputStyles } from './input.styles'

class Input extends PureComponent {
  render() {
    const { placeholder, type, label, required, onChange, height, oneLine, name, selected } = this.props
    return (
      <InputStyles.Wrapper contentOnOneLine={oneLine}>
        <InputStyles.Label>{label}</InputStyles.Label>
        <InputStyles.InputField
          placeholder={placeholder}
          type={type}
          reqired={required}
          onChange={onChange}
          height={height}
          name={name}
          selected={selected}
        />
      </InputStyles.Wrapper>
    )
  }
}

export default Input;
