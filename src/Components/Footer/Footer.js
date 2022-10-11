import React from 'react'

function Footer({setTodos,todos, setHide}) {
  return (
    <footer>
      	<meta property="todoDone" content="[count(todo where done)]"/>
		    <meta property="todoLeft" content="[count(todo where !done)]"/>

        <span className="todo-count">
			  <strong mv-value="todoLeft">0</strong>
			{/* [if(todoLeft = 1, 'item', 'items')] left */}
		  </span>

      <meta property="activeFilter" content="all" mv-storage="none"/>

      <ul className='filters' >
        <li>
          <a className="[if(activeFilter = 'all', 'selected')]"
            mv-action="set(activeFilter, 'all')">All</a>
        </li>
        <li>
          <a className="[if(activeFilter = 'active', 'selected')]"
            mv-action="set(activeFilter, 'active')">Active</a>
        </li>
        <li>
          <a className="[if(activeFilter = 'completed', 'selected')]"
            mv-action="set(activeFilter, 'completed')">Completed</a>
        </li>
      </ul>

      <button hidden="[todoDone = 0]"
				  className="clear-completed"
				  mv-action="delete(todo where done)">
			Clear completed
		</button>

    
    
    </footer>
  )
}

export default Footer