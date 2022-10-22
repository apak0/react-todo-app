import {useState, useEffect} from 'react'

function Form({setTodos, todos}) {
  
  const [form, setForm] = useState("")


  const handleChangeForm = (e) => {
    setForm(e.target.value )
   };

   
const handleSubmit = (e) => {
  e.preventDefault();

  if(form.trim().length === 0){
    return false
  }

  setTodos([...todos, {
    id: todos.length > 0 ? todos[todos.length - 1].id +1 : 0,
    todo: form,
    checked: false,
  },
  ]);
 
};

useEffect(()=> {
  setForm("")
},[todos])

 

    
  

  return (

<header className="header">
		<h1>todos</h1>
		<form  onSubmit={handleSubmit} >
			<input onChange={handleChangeForm} property="newTodo" className="new-todo"
					 placeholder="What needs to be done?"
           value={form}
           
					 />
		</form>
	</header>


  )
}

export default Form