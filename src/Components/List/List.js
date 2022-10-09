import React from 'react'

function List({todos}) {
  return (
    // <div>
    //   <ul>
       
    //       {
    //         todos.map((todo, index)=>
    //           <li key={index} className="todo-list"  >
    //             {todo.name}
    //           </li>
    //           )
    //       }
       
    //   </ul>
    // </div>

<section hidden="[count(todo) = 0]" className="main">

  <input property="toggleAll" id="toggle-all"
      className="toggle-all" type="checkbox"
      // checked="[todoLeft = 0]"
      />
  <label htmlFor='toggle-all' mv-action="set(done, !toggleAll)">
    Mark all as complete
  </label>

  <ul className="todo-list">
    {
      todos.map((todo, index)=>{
    
    <li key={index} className="todo-list" mv-multiple="todo"
      // className="[if(done, 'completed')]"
      hidden="[(done and activeFilter = 'active') or (!done and activeFilter = 'completed')]">
      <div className="view">
        <input property="done" className="toggle" type="checkbox"/>
        <label property="text">{todo.name}</label>
        <button className="destroy" mv-action="delete(todo)"></button>
      </div>
    </li>
    }
    )
  }
  </ul>
</section>          


  )
}

export default List