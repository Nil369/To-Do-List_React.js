import React from 'react'
import TodoItem  from "./TodoItem";

const Todos = (props) => {

  let myStyle = {

    minHeight: "70vh",
    margin: "50px auto"
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h1 className='my-4'>Todos List</h1>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todos)=>{
        return(<TodoItem todo={todos} key={todos.sno} onDelete={props.onDelete}/>)

      })
    }
      

    </div>
  )
}

export default Todos
