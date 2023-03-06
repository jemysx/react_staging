import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
  //获取用户的输入,
  search = ()=>{
    //常规解构赋值
    // const {value} = this.keyWordElement
   //连续解构赋值 + 重命名
    // const {keyWordElement} = this
    // keyWordElement.value
    const {keyWordElement:{value:keyWord}} = this
    console.log(keyWord);
      //发送网络请求
    this.props.updateAppstate({isFirst:false,isLoading:true})
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response =>{
        console.log('成功了',response.data)
        this.props.updateAppstate({isLoading:false,users:response.data.items})
      },
      error =>{
        this.props.updateAppstate({isLoading:false,err:error.message})
      }
    )
  }

  
  render() {
    return (
      <div>
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={(c)=>{this.keyWordElement= c}}  type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
            </div>
          </section>
      </div>
    )
  }
}
