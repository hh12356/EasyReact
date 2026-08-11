import { useEffect, useState } from "react";

function Son(){
  useEffect(()=>{
    //渲染时开启一个定时器
    const timer = setInterval(()=>{
      console.log('定时器运行中...');
    },1000)

    //清除副作用：在组件卸载或依赖项变化时生效
    return ()=>{
      clearInterval(timer)
    }
  },[])
  return <div>this is son</div>
}

function App() {
  //通过条件渲染模拟组件卸载
  const [show,setShow] = useState(true)
  return (
    <div>
      {show && <Son/>}{/*show==false时Son被卸载，并非隐藏*/}
      <button onClick={()=>setShow(false)}>卸载Son组件</button>
    </div>
  )
}

export default App;
