// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Deleted", todo)

    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let slno;

    if (todos.length === 0) {
      slno = 0;
    }

    else { slno = todos[todos.length - 1].slno + 1; }

    console.log("I am adding this to Todo List", title, desc)
    const myTodo = {
      slno: slno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>

      {/* <Header title="My Todos List" searchBar={false} /> 
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} /> 
      <About/>
      <Footer /> */}


<Router>
  <Header title="My Todos List" searchBar={false} />
  <Routes>
    <Route exact path="/" element={<>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>} />
    <Route exact path="/about" element={<About />
  } />
  </Routes>
  <Footer />
</Router>




    </>
  );
}

export default App;