import {useState} from 'react'

//  index.js deki hide state'i, todos state'ini ve bu state üzerinde değişiklik yapmamıza sağlayacak olan setTodos fonksiyonunu ayrı ayrı props olarak index.js den alıyoruz.
function Footer({setTodos,todos, setHide}) {

  // Tamamlanmamış todoları bir değişkene atıyoruz.
  const unCompleted = todos.filter((check) => check.checked === false);

  // select diye bir state oluşturuyoruz.
  const [select, setSelect] = useState("selected", "", "")

  // tamamlanmış todoları listeden kaldırıp todos state'ini güncelliyoruz.
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

     
{/* select state'indeki indexe göre className verip UI'ı güncelliyoruz. Select state'inin ise selectedButton fonksiyonuyla değiştiriyoruz ki tıkladığımız a linkinin css'i seçilsin. */}
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