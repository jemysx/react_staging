import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {


  //全选checkbox的回调
  handleCheckAll = (evnet)=>{
    this.props.checkAllTodo(evnet.target.checked)
  }
  //清除所有已完成的回调
  handleClearAllDone = ()=>{
     this.props.clearAllDone()
  }
  render() {

   const {todos} = this.props
   console.log(todos);
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue,
    //   initialValue
    // );
   //已完成的个数
    const doneCount = todos.reduce((pre,todo)=>{
          // 判断todo.done true则加1 否则加0
          return pre + (todo.done?1:0)
    },0)
          console.log('@@',doneCount)
    //总数
    const total = todos.length
    return (
    <div className="todo-footer">
        <label>
             <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !==0 ?true:false}/>
        </label>
        <span>
             <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
    </div>
    )
  }
}
