//引入react核心库
import React  from "react";
//引入reactDOM

//引入app组件
import App from './App';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
//渲染app组件到页面
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>
);