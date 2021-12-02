import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Data from './Components/Data'
import Footer from './Components/Footer'
import AddTodo from './Components/AddTodo';
import React, { useState, useEffect } from 'react';

function App() {

  let display;

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const [todos, setTodos] = useState(initTodo)
  
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
  

  const onDelete = (todo) => {
    console.log("i am on deleted", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc, hobb, hdesc, qual, perc) => {
    let sno;
    console.log('i am addTodo function', title, desc);
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno, 
      title: title,
      desc: desc,
      hobb: hobb,
      hdesc: hdesc,
      qual: qual,
      perc: perc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  return (

    <>
      <Router>
        <Switch />
        <Route exact path="/">
          <AddTodo addTodo={addTodo} display={display} todo={todos} />
          <Data todos={todos} onDelete={onDelete} />
        </Route>
        <Route path="/about">
          <AddTodo addTodo={addTodo} display={display} />
          <Data todos={todos} onDelete={onDelete} />
        </Route>
        <Footer />
      </Router>
    </>

  );
}

export default App;
