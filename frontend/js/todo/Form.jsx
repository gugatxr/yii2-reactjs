import React from 'react'

export default function Form({value, onChange, onSave}){
  function onSubmit(event){
    event.preventDefault();
    onSave()
  }

  return (
    <form onSubmit={onSubmit}>
      <label>New todo</label>
      <br />
      <input name="todo" type="text" value={value} onChange={event => onChange(event.target.value)}/>

      <input type="submit" value="Add"/>
    </form>
  )
}
