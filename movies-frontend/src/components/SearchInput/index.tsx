import React from 'react'
import './SearchInput.scss'

const Input = (props: any) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input
