import React from "react";

function List({setTodos, todos, hide }) {

  const checkedTodo = (e) => {

  }


  const deleteTodo = (e) => {
    setTodos(todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
    )
  }


  return (
  

    <section className="main">
       <input
        property="toggleAll"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        
      />
      <label htmlFor="toggle-all">Mark all as complete </label>

      <ul className="todo-list">
      {todos.map((todo, index)=> (
        

        
        <li key={index}>
          <div>

          <input
                className="toggle"
                type="checkbox"
                defaultChecked= "checked"
                
              
                
                // işaretlenme durumu değiştiğinde id kullanarak veriyi state'e set ediyoruz.
              />

          <label>{todo.todo}</label>

          <button
          className="destroy"
          id={todo.id}
          onClick={deleteTodo}>
        </button>        
              
        

        </div>

        </li>

        
      )
      )}
      </ul>
      
    

    </section>


   

  );
}

export default List;
