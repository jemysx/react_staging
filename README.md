## 一 todoList案列相关知识点

1.拆分组件， 实现静态组件， 注意：className，style的写法

2.动态初始化列表，如何确定将数据放在哪个组件的state中?
    ---某个组件使用：放在其自身的state中
    ---某些组件使用：放在他们共同的父组件state中(官方称此操作为：状态提升)

3.关于父子之间通信：
    1.父组件给子组件传递数据， 通过props传递
    2.子组件给父组件传递数据：通过props传递，要求父组件提前给子组件传递一个函数
    
4.注意defaultchecked和checked的区别 类似的还有defaultValue和value

5.状态在哪里,操作状态的方法就在哪里

## 二 github搜索案例相关知识点
1.设计状态时要考虑全面,例如带有网络请求的组件,要考虑请求失败怎么办. 

2.ES6小知识点: 解构赋值+重命名
  
``let obj = {a:{b:1}}
     const {a}  = obj  //传统解构赋值
     const {a:{b}} = obj //连续解构赋值
     const {a:{b:value}} //连续解构赋值+重命名``
     
3.消息订阅与发布机制   
      1.先订阅，再发布
      2.适用于任意组件间的通信
      3.要在组件的componentWillUnmount中取消订阅

4.fetch发送请求(关注分离的设计思想)

``try{
        const response = await fetch(`/api1/search/users2?q=${keyWord}`)
        const data = await response.json()
        console.log(data)
        PubSub.publish('ken',{isLoading:false,users:data.items})
        }catch(error){
        console.log('请求出错',error)
        PubSub.publish('ken',{isLoading:false,err:error.message})
    }``   


## 三， 路由的基本使用 

   1.明确界面中的导航区,展示区

   2.导航区的a标签改为Link标签

   3.展示区写Route标签进行路径的匹配
       <Route path='/xxxx' component ={Demo}/>
   
   4.<App>的最外侧包裹了一个<BrowserRouter>或者<HashRouter>


## 四, 路由组件与一般组件

   1.写法不同: 
             一般组件:<DEMO/>
             路由组件:<Route  path="/home" component={Home}/>

   2.存放位置不同:
            一般组件:compoenets
            路由组件:pages
   3.接收到的props不同:
            一般组件:写组件标签时传递什么就接收什么
            路由组件:接收到三个固定的属性值                   
                    history . location  . match

##  五, NavLink与封装NavLink
   
     1. NavLink可以实现路由链接的高亮, 通过activeClassName指定样式名字
     2.标签体内容是一个特殊的标签属性
     3.通过this.props.children可以获取标签体内容 它是一个特殊的标签属性


##  六， Swtich的使用


##  七 解决多级路径刷新页面样式丢失的问题

    1.public/index.html中 引入样式时  ./ 写 / 
    2.public/index.html中 引入样式时 ./ 写%PUBLIC_URL%
    3.使用HashRouter


##   八， 路由的模糊匹配和严格匹配

##   九, Redirect的使用
     
    1.一般写在所有路由注册的最下方,当所有路由都无法匹配时,跳转到Redirect指定的路由

    2, 具体编码
                   <Switch>
                        <Route   path="/about" component={About}/>
                        <Route   path="/home" component={Home}/>
                        <Redirect to="/home"/>
                   </Switch>
       
##  十， 嵌套路由
     1.注册子路由时要写上父路由的path值
     2.路由的匹配时按照注册路由的顺序执行的


##   十一, 向路由组件传递参数

     1.params参数
           路由链接（携带参数）: <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
           注册路由(声明接收): <Route path="/home/message/detail/:id/:title" component={Detail}/>
           接收参数:const{id,title} = this.props.match.params

     2.search 参数
            路由链接(携带参数):<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>
            注册路由(无需声明,正常注册即可)   
            接收参数:this.props.location.search
            备注:获取到的是search是urlencoded编码字符串 ,需要借助querystring解析  