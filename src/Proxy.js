import React, { Component } from 'react'
import axios from 'axios'
export default class Proxy extends Component {
    componentDidMount(){
        // axios.get("/films.json").then(res=>{
        //     console.log(res)
        // })
        
        //请求卖座网的数据  //通过设置Access.Control-Allow-Origin
        // axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4214842",{
        //     headers:{
        //         //前端在请求头上面携带数据给后端
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1604463379950789795217412","bc":"110100"}',
        //         'X-Host':'mall.film-ticket.film.list'
        //     }
        // }).then(res=>{
        //     console.log("res===",res)
        // })

        //请求猫眼的数据
        //得通过前端代理的方式,请求数据
        axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4214842",{
            headers:{
                //前端在请求头上面携带数据给后端
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1604463379950789795217412","bc":"110100"}',
                'X-Host':'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log("res===",res)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
