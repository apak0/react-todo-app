import React from "react";

function List({todos, setTodos, hide }) {

  const checkedTodo = (e) => {
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        return {...todo, checked: !todo.checked};
      }
      return todo;
    });
    setTodos(newTodos);
  };

const isCompleted = (e) => {
    if(e.checked === true && hide === "All") {
      return "completed";
    }else if (e.checked === true && hide === "Active"){
      return "complated hidden";
    } else if (e.checked === false && hide === "Completed"){
      return "hidden";
    }
  };

  const deleteTodo = (e) => {
    setTodos(todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))); 
  };

  const selectAllTodo = (e) => {
    if( e.target.id === "toggle-all-todos") {
      todos.map((todo)=> 
        todo.defaultChecked = true
      )
    }

  
   } 

   const turnTodosActiveted = (e) => {
    
      const newtg = todos.map((item) => {
        if (item.checked === true ) {
          return { ...item, defaultChecked: true };
        } else {
          return { ...item, defaultChecked: false };
        }
      });
    
      setTodos(newtg);
    }
  //     if (page === "All") {
  //       setTodos(newtg);
  //     } else if (page === "Active") {
  //       setTodos((!toggle && []) || newtg);
  //     } else if (page === "Completed") {
  //       setTodos((toggle && []) || newtg);
  //     }
  
  //     setToggle(!toggle);
  //   };
  //  }

  return (
  

    <div className="main" onClick={selectAllTodo}>
       <input
        property="toggleAll"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onClick={turnTodosActiveted}
        />
       <label id="toggle-all-todos" htmlFor="toggle-all"  >Mark all as complete </label>

        <ul className="todo-list">
          {todos.map((todo)=> (
          <li key={todo.id} id={todo.id} className={isCompleted(todo)} >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.checked}
                id={todo.id}
                onClick={checkedTodo} 
                />
              <label>{todo.todo}</label>

              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}>
              </button>        
            </div>
          </li>
          ))}
        </ul>
    </div>


   

  );
}

export default List;
