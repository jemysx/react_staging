//创建外壳组件
//{Component} 不是结构赋值,是在react文件中利用了分别暴露
import React ,{Component} from "react";
import Hello  from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";
//创建并暴露app组件
export default  class App extends Component{
    render(){
         return (


            <div>
                <Hello />
                <Welcome/>
            </div>
         )
    }
}

//暴露APP组件
// export default App