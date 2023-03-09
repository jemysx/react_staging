import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'
export default class Message extends Component {

  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" }
    ]
  }

  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }
  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }

  // back = ()=>{
  //   this.props.history.goBack()
  // }

  // forword = ()=>{
  //   this.props.history.goForward()
  // }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>

          {
            messageArr.map((messageObj) => {
              return (
                <li key={messageObj.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;
                  <button onClick={() => { this.pushShow(messageObj.id, messageObj.title) }}>push查看</button>
                  <button onClick={() => { this.replaceShow(messageObj.id, messageObj.title) }}>replace查看</button>
                  {/* 向路由组件传递search参数 */}
                  {/*  <Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递state参数 */}
                  {/* <Link replace={true} to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>&nbsp;&nbsp; */}
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
        {/* search参数无需声明接收 正常注册路由*/}
        {/*  <Route path="/home/message/detail" component={Detail}/> */}
        {/* state参数无需声明接收 正常注册路由*/}
        {/* <Route path="/home/message/detail" component={Detail}/> */}


      </div>
    )
  }
}
