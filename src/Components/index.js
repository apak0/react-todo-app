import { useEffect, useState } from "react";


import Form from "../Components/Form/Form"
import List from "../Components/List/List"
import Footer from "../Components/Footer/Footer"

function Components () {

    const [todos, setTodos] = useState([]);



    useEffect(()=> {
        console.log(todos)
    }, [todos]);

    const [hide, setHide] = useState("All");


    
    return(
        <div className="todoapp" >
            <Form setTodos={setTodos} todos={todos} />
            <List setTodos={setTodos} todos={todos} hide={hide} />
            <Footer setTodos={setTodos} todos={todos} setHide={setHide} />

        </div>

    );
}

export default Components;