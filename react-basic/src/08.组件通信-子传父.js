//子传父

import { useState } from "react";

//核心：在子组件中调用父组件函数并传递参数
function Son({onGetSonMsg}){//解构props(加{})
  //Son组件中的数据
  const sonMsg='this is son msg'
  return(
    <div>
      this is Son
      <button onClick={()=>onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

function App() {
  const [msg,setMsg]=useState('')
  const getMsg=(msg)=>{
    setMsg(msg)
  }
  return (
    <div>
      this is App {msg}
      <Son onGetSonMsg={getMsg}/>
    </div>
  );
}

export default App;
