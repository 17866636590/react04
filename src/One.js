import React, { Component } from 'react'

export default class One extends Component {
    constructor(props){
        // console.log("App-constructor3..")
        super()
        this.state={
            oneN:props.n
        }
       }
    //   componentDidMount(){
    //     // console.log("App-componentDidMount5...")
    //   }

    /*
    getDerivedStateFromProps( //获取外部状态来自于外部传入的属性)
   注意: 前面加static修饰,说明是由类管理的,并且不能用this关键字,由类的名字调用
   作用:
   让组件的内部状态始终来源于外部传入的属性 ,只有外部传入的属性发生改变了,组件自己的状态才会发生变化
   一旦组件里面的状态依托于外部外部传入的属性的变化而变化,那么就需要用到此钩子函数了,
   调用时机:
   挂载阶段,new props,setstate,forceUpdate
   */
  
        static getDerivedStateFromProps(props,state){
            console.log("getDerivedStateFromProps...")
            return{
                oneN:props.n
            }
      }
      render() {
        // console.log("App-render4...")
        return (
          <div>
            one...{this.state.oneN}
            <button onClick={()=>{this.setState({oneN:20})}}>点击</button>
          </div>
        )
      }
}
/*
//注意:下述这些钩子函数基本过时了,不建议使用的钩子,用的时候加UNSAFE_前缀
componentWillMount 属于挂载阶段的钩子
componentWillReceiveProps  //更新阶段
componentWillUpdate  //更新阶段
 */