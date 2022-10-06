import { useEffect, useState } from "react";

import Form from "../Components/Form/Form"
import List from "../Components/List/List"
import Footer from "../Components/Footer/Footer"

function Components () {

    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        console.log(todos)
    }, [todos]);



    
    return(
        <div style={{textAlign:"center"}} className="todoapp" >
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} />
            <Footer/>

        </div>

    );
}

export default Components;