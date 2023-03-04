//创建外壳组件
//{Component} 不是结构赋值,是在react文件中利用了分别暴露
import React ,{Component} from "react";
import Header  from "./components/Header"
import  List  from "./components/List";
import Footer from "./components/Footer"
import "./App.css"
//创建并暴露app组件
export default  class App extends Component{

    //初始化状态
    state = {todos:[
        {id:'001',name:"吃饭",done:true},
        {id:'002',name:"睡觉",done:true},
        {id:'003',name:"打代码",done:false}
    ]}
    
    //addTodo用于添加一个todo,接收的参数是todo对象
    addTodo = (todoObj)=>{
        //获取原todos
        const {todos} = this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})
    }
    render(){
        const {todos} = this.state
         return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={todos}/>
                <Footer/>
                </div>
            </div>
         )
    }
}

//暴露APP组件
// export default App