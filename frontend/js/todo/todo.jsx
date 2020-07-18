import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import List from './List';
import Form from './Form';

function Todo(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function onSave(){
    setTodos([
      ...todos,
      input
    ])

    setInput('');
  }

    return (
      <>
      <Form value={input} onChange={setInput} onSave={onSave}/>
      <List todos={todos} />
      </>
    )
}

ReactDOM.render(<Todo />, document.getElementById('todo'))
