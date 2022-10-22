import {useState, useEffect} from 'react'

//  index.js deki todos statimizi ve bu state üzerinde değişiklik yapmamıza sağlayacak olan setTodos fonksiyonunu ayrı ayrı props olarak index.js den alıyoruz.
function Form({setTodos, todos}) {
  
  // Form componentinin return ettiği jsx kısmındaki inputtan alacağımız değerleri tutmak için form isminde bir state oluşturuyoruz.
  // Başlangıç değerini boş bir string olarak veriyoruz.
  const [form, setForm] = useState("")

// inputtaki value her değiştiğinde form state'ini güncelleyip inputtaki value olarak değiştiriyoruz.
  const handleChangeForm = (e) => {
    setForm(e.target.value )
   };

  //  formumuz her submit olduğunda çalışacak fonksiyon
const handleSubmit = (e) => {
  e.preventDefault();

  // forma boş değer girilmişse burada submit etmeden geri dönmesini sağlıyoruz.
  if(form.trim().length === 0){
    return false
  }

  // burada index.js de tutuğumuz todos state'inin içine state'i güncelleyerek bir eleman gönderiyoruz. 
  // ...todos ifadesi state'in o anki değerini almamızı sağlıyor.
  setTodos([...todos, {
    id: todos.length > 0 ? todos[todos.length - 1].id +1 : 0,
    todo: form,
    checked: false,
  },
  ]);
 
};

// bir todo ekledikten sonra inputun içini temizlemimize yarayan useEffect fonksiyonu
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