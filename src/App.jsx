//创建外壳组件
//{Component} 不是结构赋值,是在react文件中利用了分别暴露
import React ,{Component} from "react";
import Header  from "./components/Header"
import  List  from "./components/List";
import Footer from "./components/Footer"
import "./App.css"
//创建并暴露app组件
export default  class App extends Component{
    //状态在哪里，操作状态的方法旧在哪里
    
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
    //用于勾选和取消勾选的todo,更新todo对象
    updateTodo = (id,done)=>{
        //获取状态中的todolist
        const {todos} = this.state

        //遍历做判断 更新状态
        const newTodos = todos.map((todoObj)=>{
           if(todoObj.id === id)  return {...todoObj,done:done}
           else return todoObj
        })
        this.setState({todos:newTodos})
    }
   
    //删除一个todo对象
    deleteTodo = (id)=>{
        //获取状态中的todolist
        const {todos} = this.state

       //删除指定id的todo对象
        
       const newTodos = todos.filter((todoObj)=>{
        return todoObj.id !== id
       })
        this.setState({todos:newTodos})
    }
    render(){
        const {todos} = this.state
         return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer/>
                </div>
            </div>
         )
    }
}

//暴露APP组件
// export default App