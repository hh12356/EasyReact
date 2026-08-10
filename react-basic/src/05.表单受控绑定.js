import { useState } from "react";

//受控绑定表单
//1.声明一个react状态-useState
//2.核心绑定流程
//(1)通过value属性绑定react状态
//(2)绑定onChange事件，通过事件状态修改react状态

function App() {
  const [value,setValue]=useState('')
  return (
    <div className="App">
      <input
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        type="text"/>
    </div>
  );
}

export default App;
