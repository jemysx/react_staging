import React, { Component } from 'react'


const data =[
    {id:"01",content:"你好,1"},
    {id:"02",content:"你好,2"},
    {id:"03",content:"你好,3"}
]
export default class Detail extends Component {
  render() {
    console.log(this.props)
    //接收params参数
    const {id,title} = this.props.match.params
    const findResult = data.find((dataObj)=>{
        return dataObj.id == id
    })
    return (
      <div>
        <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Content:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
