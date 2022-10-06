import React from 'react'

function List({todos}) {
  return (
    <div>
      <ul>
        <li>
          {
            todos.map((todo, index)=>
              <li key={index}  >
                {todo.name}
              </li>
              )
          }
        </li>
      </ul>
    </div>
  )
}

export default List