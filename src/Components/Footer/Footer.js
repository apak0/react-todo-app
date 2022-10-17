import React from 'react'

function Footer({setTodos,todos, setHide}) {

  const unCompleted = todos.filter((check) => check.checked === false);



  return (
    <footer  className="footer" >
      	

        <span className="todo-count">
			  <strong>{todos.filter(item => !item.checked).length} items left</strong>
			
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