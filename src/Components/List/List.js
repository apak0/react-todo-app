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

 

   
   const allComplete = (e) => {
    let notCompleted = todos.filter((todo) => todo.checked === false)
    if(notCompleted.length > 0){
        let allCompleted = todos.map((todo) => {
            if(todo.checked === false || todo.checked === true){
                return{...todo, checked: true};
            }
            return todo;
        })
        setTodos(allCompleted) 
    }
    if(notCompleted.length === 0){
        let allNotCompleted = todos.map((todo) => {
            return {...todo, checked: false}
        })
        setTodos(allNotCompleted)
    }
}

  return (
  

    <div className="main">
       <input
        property="toggleAll"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onClick={allComplete}
        
        />
       <label id="toggle-all-todos" htmlFor="toggle-all"  >Mark all as complete </label>

        <ul className="todo-list">
         
        
          {todos.map((todo)=> (
          <li key={todo.id} id={todo.id} className={isCompleted(todo)} >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.checked}
               
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
