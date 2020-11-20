import React, { Component } from 'react'
// import TodoList from './TodoList'
// import Proxy from './Proxy'
import One from './One'
export default class App extends Component {
  /*
  constructor()钩子函数的作用:
  1.通过给this.state赋值对象来初始化内部state
  2.为事件处理函数绑定实例,(this指向)

  //注意:在constructor中不能使用setState方法,因为真实dom没有渲染出来
  */
  constructor(){
    super()
    // console.log("App-constructor1..")
    this.state={
      n:1
    }
    this.clickme=this.clickme.bind(this)
  }
  clickme(){
    // console.log(this.state.n+1)
    console.log(this)
  }

  /*
  组件挂载完毕的时候,此钩子函数就会执行,(相当于vue里的mounted)
  可以用来进行插件的实例化是 如:new.swiper(),
  可以进行异步ajxs的请求,axios,fetch
  */
  componentDidMount(){
    // console.log("App-componentDidMount6...")
  }
  /*
  render()钩子函数执行
  reader这个钩子函数式react必不可少的钩子函数
  1.挂载的时候===>将虚拟dom渲染成真实dom元素
  2.新数据传入,new props
  3.内部调用setState
  4.forceUpdate强制更新时

  注意:
  外部传入的属性组件内部只能使用,不能更改,如果想要更改的话,定义组建的内部状态
  */
  render() {
    // console.log("App-render2...")
    return (
      <div>
        {/* <TodoList/> */}
        {/* <Proxy/> */}
        app---{this.state.n}
        {/* <button onClick={this.clickme}>点击</button> */}
        <button onClick={()=>{this.setState({n:this.state.n+1})}}>点击更改</button>
        <One n={this.state.n}></One>
      </div>
    )
  }
}
