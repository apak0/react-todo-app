import { useEffect, useState } from "react";


import Form from "../Components/Form/Form"
import List from "../Components/List/List"
import Footer from "../Components/Footer/Footer"

function Components () {
// Todoları tutacağımız bir state oluşturuyoruz, başlangıç değerini boş bir array olarak başlatıyoruz. Daha sorna input aracılığıyla ekleme yapacağız.
    const [todos, setTodos] = useState([]);


// todos state'imiz değiştiğinde konsola yazdırıp istediğimiz değişiklikleri yapabiliyor muyuz diye useEffect hookuyla todos satetini konsola yazdırıyoruz.
    useEffect(()=> {
        console.log(todos)
    }, [todos]);

// hide isminde bir state oluşturuyoruz. Bu state'i footer kısmında kullanıcaz. Başlangıç değerine All string ifadesini veriyoruz.
    const [hide, setHide] = useState("All");

//  Burası bizim ana componentimiz. Alt componentlerin hepsini bu componentte toplayıp App.js Componentinde işleme alıcaz.
    return(
        <div className="todoapp" >
            <Form setTodos={setTodos} todos={todos} />
            <List setTodos={setTodos} todos={todos} hide={hide} />
            <Footer setTodos={setTodos} todos={todos} setHide={setHide} />

        </div>

    );
}

export default Components;