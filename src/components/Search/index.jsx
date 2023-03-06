import React, { Component } from 'react'
import PubSub from 'pubsub-js';
// import axios from 'axios';

export default class Search extends Component {
  //获取用户的输入,
  search = async()=>{

    
  //  连续解构赋值 + 重命名
    const {keyWordElement:{value:keyWord}} = this
    console.log(keyWord);
    //发布消息请求前通知List更新状态
    PubSub.publish('ken',{isFirst:false,isLoading:true})
     
    
  //#region  使用axios发送网络请求
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response =>{
    //     console.log('成功了',response.data)
    //     //请求成功后通知list更新状态
    //     PubSub.publish('ken',{isLoading:false,users:response.data.items})

    //   },
    //   error =>{
    //     //请求失败后通知list更新状态
    //     PubSub.publish('ken',{isLoading:false,err:error.message})
    //   }
    // )
    //#endregion

  //使用fetch发送 (未优化)
    //  fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   response =>{
    //     console.log('联系服务器成功了');
    //     return response.json()
    //   },
    //   error=>{
    //     console.log('联系服务器失败了',error);
    //     return new Promise(()=>{})
    //   }
    //  ).then(
    //      response =>{
    //        console.log('获取数据成功了',response);
    //      },
    //      error=>{console.log('获取数据失败了',error)}
    //  )

    //使用fetch发送 (优化)
    try{
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      console.log(data)
      PubSub.publish('ken',{isLoading:false,users:data.items})
    }catch(error){
      console.log('请求出错',error)
      PubSub.publish('ken',{isLoading:false,err:error.message})
    }
    
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
