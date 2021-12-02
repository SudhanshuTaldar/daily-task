import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Todos from './Components/Todos'
import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import TodoItem from './Components/TodoItem';
import TimeSheet from './Components/Timesheet';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';
import Timesheet from './Components/Timesheet';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const [todos, settodo] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const onDelete = (todoItem) => {
    console.log("dsfdsf");
    settodo(todos.filter((e) => {
      return e !== todoItem;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))


  }

  const addTodo = (title, des) => {
    console.log("adding th new task", title, des);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].no + 1;
    }
    const myTodo = {
      no: sno,
      title: title,
      des: des
    }
    settodo([...todos, myTodo])
    console.log(myTodo);




  }

  return (
    <>
      <Router>
        <Header title="TodoList" />
        <Switch>
          <Route path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              </>)
          }}>
          </Route>
          <Route path="/form" component={Timesheet}>
            <Timesheet />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
    );
    
    // vanila javascript
    // /*#__PURE__*/
    // React.createElement(Router, null, /*#__PURE__*/React.createElement(Header, {
    //   title: "TodoList"
    // }), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    //   path: "/",
    //   render: () => {
    //     return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AddTodo, {
    //       addTodo: addTodo
    //     }), /*#__PURE__*/React.createElement(Todos, {
    //       todos: todos,
    //       onDelete: onDelete
    //     }));
    //   }
    // }), /*#__PURE__*/React.createElement(Route, {
    //   path: "/form",
    //   component: Timesheet
    // }, /*#__PURE__*/React.createElement(Timesheet, null))), /*#__PURE__*/React.createElement(Footer, null)));
  
  }

export default App;
