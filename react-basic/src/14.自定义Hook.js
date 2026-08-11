import { useState } from "react"

//封装自定义Hook

//问题：布尔切换的逻辑 当前组件耦合在一起 不方便复用

//解决思路：自定义Hook

function useToggle(){
  //可复用的逻辑代码
  const [value,setValue]=useState(true)
  const toggle=()=>setValue(!value)
  //哪些状态和回调函数需要在其他组件中使用 return
  return{
    value,
    toggle
  }
}

//封装自定义hook通用思路
//1.声明以use开头的函数
//2.在函数体内封装可复用的逻辑（只要是可复用的逻辑）
//3.return组件中用到的状态或回调函数
//4.在组件中用到时执行并解构（每个组件有独立的实例快照）

function App() {
  const {value,toggle} = useToggle()
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App;
