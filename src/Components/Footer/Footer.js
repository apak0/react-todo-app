import React from 'react'

function Footer({setTodos,todos, setHide}) {
  return (
    <footer>
      	

        <span className="todo-count">
			  <strong>{todos.filter(item => item.checked).length}</strong>
			
		  </span>

      <meta property="activeFilter" content="all"/>

      <ul className='filters' >
        <li>
          <a className="">All</a>
        </li>
        <li>
          <a className="">Active</a>
        </li>
        <li>
          <a className="">Completed</a>
        </li>
      </ul>

      <button
				  className="clear-completed"
				 >
			Clear completed
		</button>

    
    
    </footer>
  )
}

export default Footer