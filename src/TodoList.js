import React, { Component } from 'react'
import axios from 'axios'
export default class TodoList extends Component {
    state={
        list:[],
        username:"",
        age:0,
        
    }
    componentDidMount(){
      this.getData()
    }
      //进行异步操作
      getData=()=>{
        axios.get("http://localhost:4000/list").then(res=>{
            // console.log(res)
            this.setState({
                list:res.data
            })
        })
       }
    handleChange=e=>{
        // console.log(e.target.id)
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    add=()=>{
        axios.post("http://localhost:4000/list",{
            username:this.state.username,
            age:this.state.age
        }).then(res=>{
            // console.log("成功了")
           this.getData()
            this.setState({
                username:"",
                name:0
            })
        })
    }
    remove=(id)=>{
        // console.log(id)
        axios.delete("http://localhost:4000/list/"+id).then(res=>{
            this.getData()
        })
    }
    update=(item)=>{
        let value=prompt("请输入更新内容..",item.username+","+item.age)
        if(value){
            var arr=value.split(",")
            axios.patch("http://localhost:4000/list/"+item.id,{
                username:arr[0],
                age:arr[1]
            }).then(res=>{
                this.getData()
            })
        }
    }
    blur=()=>{
        let keyword=prompt("请输入关键字...")
        axios.get("http://localhost:4000/list/?username_like="+keyword).then(res=>{
            console.log('res===>',res)
        })
    }
    render() {
        let {list} =this.state
        return (
            <div>

                todolist<br/>
                <input id="username" onChange={this.handleChange} type="text" placeholder="请输入用户名.."/>
                <input id="age" onChange={this.handleChange} type="number" placeholder="请输入年龄..."/>
                <button onClick={this.add}>添加</button>
                <button onClick={this.blur}>模糊查询</button>
                
                <ul>
                    {
                        list.map(item=>{
                        return <li key={item.id}>{item.username}---{item.age}
                        <button onClick={this.remove.bind(this,item.id)}>删除</button>
                        <button onClick={this.update.bind(this,item)}>更新</button>
                        </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
