import React, { useState } from 'react'
import FormTodo from './FormTodo'

function AddTodo() {
  const [text, setText] = useState("")
  function addText(newText) {
    setText(newText)
  }
  return (
    <div>
      <h2>Add Text</h2>
      <FormTodo addText={addText}></FormTodo>
      <p>{text}</p>
    </div>
  )
}

export default AddTodo