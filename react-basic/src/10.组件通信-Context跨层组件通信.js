import { Component, createContext, useContext, useState } from "react";
//使用Context机制跨层级组件通信
//1.createContext方法创建一个上下文对象

const MsgContext = createContext()

//2.在顶层组件，通过Provider

//3.在底层组件，通过useContext钩子函数使用数据

function A(){
  return(
    <div>
      this is A Component
      <B/>
    </div>
  )
}

function B(){
  const msg = useContext(MsgContext)
  return(
    <div>
      this is B Component {msg}
    </div>
  )
}

function App() {
  const msg = 'this is app msg'
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is app
        <A/>
      </MsgContext.Provider>
    </div>
  )
}

export default App;
