import React, { Component } from 'react'
import qs from "qs"

const data =[
    {id:"01",content:"你好,1"},
    {id:"02",content:"你好,2"},
    {id:"03",content:"你好,3"}
]
export default class Detail extends Component {
  render() {
    // qs.stringify()  对象转成 urlencoded字符串形式
    // qs.parse  urlencoded字符串形式转成对象形式
    //接收params参数
    // const {id,title} = this.props.match.params
    console.log("state",this.props);
    //接收search参数
    // const {search} = this.props.location
    // const result =  qs.parse(search.slice(1))
    // console.log("qs",result)
    // const {id,title} = result

    //接收state参数
    const {id,title} = this.props.location.state || {}
    
    const findResult = data.find((dataObj)=>{
        return dataObj.id === id
    }) || {}
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
