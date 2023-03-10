import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {



    back = () => {
        this.props.history.goBack()
    }

    forword = () => {
        this.props.history.goForward()
    }

    render() {
        console.log('Head组件收到的props是', this.props)
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2>

                        <button onClick={this.back}>前进</button>&nbsp;&nbsp;
                        <button onClick={this.forword}>后退</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)

//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter的返回值是一个新组件