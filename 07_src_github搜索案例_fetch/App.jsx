import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {

  //更新app的state
  updateAppstate = (stateObj)=>{
     this.setState(stateObj)
  }
  render() {
    return (
        <div className="container">
        <Search/>
        <List/>
        </div>
    )
  }
}
