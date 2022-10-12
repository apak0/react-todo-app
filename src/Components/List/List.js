import React from "react";

function List({setTodos, todos, hide }) {

  // const checkedTodo = (e) => {
  //   let newTodos = todos.map((todo) => {
  //     if (parseInt(todo.id) === parseInt(e.target.id)) {
  //       return {...todo, checked: !todo.checked};
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };

  const checkedTodo = (e) => {
    // Uyumlu id'yi bulduktan sonra işaretli olma durumunu(checked) değiştiriyoruz.
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        // id'ler eşleşebilsin diye parseInt kullanarak integera çevirdik.
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos); // işaretli olma durumunu set ediyoruz.
  };

  const deleteTodo = (e) => {
    setTodos(todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
    )
  }


  const isCompleted = (e) => {
    if(e.checked === true && hide === "All") {
      return "completed";
    }else if (e.checked === true && hide === "Active"){
      return "completed hidden";
    } else if (e.checked === false && hide === "Completed"){
      return "hidden";
    }
  };

  return (
  

    <section className="main">
       <input
        property="toggleAll"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"/>
       <label htmlFor="toggle-all">Mark all as complete </label>

        <ul className="todo-list">
          {todos.map((todo)=> (
          <li key={todo.id} id={todo.id} className={isCompleted(todo)} >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.checked}
                id={todo.id}
                onClick={checkedTodo} />
              <label>{todo.todo}</label>

              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}>
              </button>        
            </div>
          </li>
          ))};
        </ul>
    </section>


   

  );
}

export default List;
