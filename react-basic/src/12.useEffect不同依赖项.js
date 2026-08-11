import { useEffect, useState } from "react";

function App() {
  const [count,setCount] = useState(0)

  //1.没有依赖项：初始+组件更新
  // useEffect(()=>console.log('执行了'))

  //2.传入空数组依赖：初始执行一次
  // useEffect(()=>console.log('执行了'),[])

  //3.传入特点依赖项
  useEffect(()=>console.log('执行了'),[count])

  return (
    <div>
      this is App
      <button onClick={()=>setCount(count+1)}>+{count}</button>
    </div>
  )
}

export default App;
