import React, { Component } from 'react'
import { NavLink,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生html中,靠a标签跳转不同的页面 */}
                {/* 
                <a class="list-group-item active" href="./about.html">About</a>
                <a class="list-group-item" href="./home.html">Home</a> */}
                {/* 在react中靠路由链接实现切换组件 编写路由链接 */}
                  <NavLink activeClassName='testCo' className="list-group-item" to="/about">About</NavLink>
                  <NavLink activeClassName='testCo'  className="list-group-item" to="/home">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                   {/* 注册路由 */}
                      <Route  path="/about" component={About}/>
                      <Route  path="/home" component={Home}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
