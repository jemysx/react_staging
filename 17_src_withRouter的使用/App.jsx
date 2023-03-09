import React, { Component } from 'react'
import { Redirect, Route,Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Header/>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生html中,靠a标签跳转不同的页面 */}
                {/* 
                <a class="list-group-item active" href="./about.html">About</a>
                <a class="list-group-item" href="./home.html">Home</a> */}
                {/* 在react中靠路由链接实现切换组件 编写路由链接 */}

                  <MyNavLink to="/about">about</MyNavLink>
                  <MyNavLink to="/home" >home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                   {/* 注册路由 */}
                   <Switch>
                        <Route   path="/about" component={About}/>
                        <Route   path="/home" component={Home}/>
                        <Redirect to="/home"/>
                   </Switch>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
