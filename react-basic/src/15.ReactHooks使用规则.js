import { useState } from "react"

//ReactHooks使用规则
//1.只能在组件或其他自定义Hook函数中使用
//2.只能在组件的顶层使用，不能嵌套在if、for、其他函数中(不能在局部作用域使用)

//1.组件外使用(不允许)
//useState('')

function App() {
  //2.if for内部(不允许)
  // if(Math.random>0.5){
  //   useState('')
  // }
  return (
    <div>
      this is app
    </div>
  )
}

export default App;
