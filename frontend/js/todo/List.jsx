import React from 'react'

export default function List({todos}){
    return (
      <ul>
        {
          todos.map((todo, index) => <li key={index}>todo</li>)
        }
      </ul>
    )
}
