import React, { Component } from 'react'
import TodoList from './TodoList'
import Proxy from './Proxy'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <TodoList/> */}
        <Proxy/>
      </div>
    )
  }
}
