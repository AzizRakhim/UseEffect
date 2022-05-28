import React, { useState } from 'react'

function UserInput({setInputValue}) {
  const inputChangeHandler = (e) => {
    setInputValue(prev => {
      return prev = e.target.value
    });
  }

  return (
    <input 
      type="text" 
      onChange={inputChangeHandler}
      name='input'
    />
  )
}

export default UserInput
