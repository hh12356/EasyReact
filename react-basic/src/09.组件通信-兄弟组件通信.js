import { Component, useState } from "react";
//兄弟组件通信
// A -> App -> B (状态提升：子->父->子)

function A({onGetAName}){
  const name='this is A name'
  return(
    <div>
      this is A Component
      <button onClick={()=>onGetAName(name)}>send</button>
    </div>
  )
}

function B(props){
  return(
    <div>
      this is B Component {props.name}
    </div>
  )
}

function App() {
  const [name,setName]=useState('')
  const getAName=(name)=>{
    setName(name)
  }
  return (
    <div>
      this is App
      <A onGetAName={getAName}/>
      <B name={name}/>
    </div>
  )
}

export default App;
