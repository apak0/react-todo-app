import {useState, useEffect} from 'react'

function Form({setTodos, todos}) {
  
  const [form, setForm] = useState({name:""})


  const handleChangeForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value} )
   };

   
const handleSubmit = (e) => {
  e.preventDefault();

  if(form.name === ""){
    return false
  };

  setTodos([...todos, form])
  setForm({name:""})
};

 

    
  

  return (

<header class="header">
		<h1>todos</h1>
		<form >
			<input property="newTodo" className="new-todo"
					 placeholder="What needs to be done?"
					 autofocus/>
		</form>
	</header>

/* 
   <header>

    <h1> Todos </h1>
    <form onSubmit={handleSubmit} >
    <input 
    name="name" 
    onChange={handleChangeForm}
    value={form.name}
    />
    </form>


   </header> */
  )
}

export default Form