import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavlink extends Component {
  render() {
    console.log(this.props);
    return (
      <NavLink activeClassName='testCo'  className="list-group-item" {...this.props}/>
    )
  }
}
