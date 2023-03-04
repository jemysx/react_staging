import React, { Component } from 'react'
import Item from "../Item"
import "./index.css"

export default class index extends Component {
  render() {

    //接收props
    const {todos} = this.props
    return (
      <div>
         <ul className="todo-main">     
              {todos.map((todo)=>{
                    // return  <Item key={todo.id} name={todo.name} done={todo.done}/>  

                    return  <Item key={todo.id} {...todo}/>  
              })}             
          </ul>
      </div>
    )
  }
}
