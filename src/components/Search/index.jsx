import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Search extends Component {
  //获取用户的输入,
  search = ()=>{

    
  //  连续解构赋值 + 重命名
    const {keyWordElement:{value:keyWord}} = this
    console.log(keyWord);
    //发布消息请求前通知List更新状态
    PubSub.publish('ken',{isFirst:false,isLoading:true})
      //发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response =>{
        console.log('成功了',response.data)
        //请求成功后通知list更新状态
        PubSub.publish('ken',{isLoading:false,users:response.data.items})

      },
      error =>{
        //请求失败后通知list更新状态
        PubSub.publish('ken',{isLoading:false,err:error.message})
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
