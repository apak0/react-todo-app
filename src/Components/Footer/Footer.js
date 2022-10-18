import {useState} from 'react'

function Footer({setTodos,todos, setHide}) {

  const unCompleted = todos.filter((check) => check.checked === false);

  const [select, setSelect] = useState("selected", "", "")

  const clearCompleted = (e) => {
    setTodos( todos.filter((check) => check.checked === false));
  }

  const selectedButton = (e) => {
    switch (e.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setHide("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setHide("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setHide("Completed");
        break;
    }
  }


  return (
    <footer  className="footer" >
      	

        <span className="todo-count">
			  <strong>{unCompleted.length}  </strong>
        {unCompleted.length > 1 ? "items left" : "item left" }
			
		  </span>

      <meta property="activeFilter" content="all"/>

      <ul className='filters' >
        <li>
          <a className={select[0]} id="All" onClick={selectedButton} >All</a>
        </li>
        <li>
          <a className={select[1]} id="Active" onClick={selectedButton}>Active</a>
        </li>
        <li>
          <a className={select[2]} id="Completed" onClick={selectedButton}>Completed</a>
        </li>
      </ul>

      <button
				  className="clear-completed" onClick={clearCompleted}
				 >
			Clear completed todo
		</button>

    
    
    </footer>
  )
}

export default Footer