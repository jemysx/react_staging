import React, { Component } from 'react'
import Item from "../Item"
import "./index.css"

export default class List extends Component {
  render() {

    //接收props
    const {todos,updateTodo} = this.props
    return (
      <div>
         <ul className="todo-main">     
              {todos.map((todo)=>{
                    // return  <Item key={todo.id} name={todo.name} done={todo.done}/>  

                    return  <Item key={todo.id} {...todo} updateTodo={updateTodo}/>  
              })}             
          </ul>
      </div>
    )
  }
}
