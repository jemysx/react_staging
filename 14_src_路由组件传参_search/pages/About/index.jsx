import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('Abou组件收到的prop',this.props)
    return (
      <div>
         <h3>我是about内容sssss</h3>
      </div>
    )
  }
}
