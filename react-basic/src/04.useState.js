import { useState } from "react";

function App() {
  //调用useState添加一个状态变量
  //count状态变量
  //setCount修改状态变量的方法
  const [count,setCount]=useState(0)

  //点击事件回调
  const handleClick=()=>{
    //作用:1.用传入的新值修改count
    //2.重新使用新的count渲染UI
    setCount(count+1)
    //直接修改不能引发视图更新(状态不可变)
    //count++;
    //console.log(count)
  }

  //修改对象状态
  const [form,setForm]=useState({name:'Jack'})
  const changeForm=()=>{
    //错误写法:直接修改
    // form.name='Mark'
    
    //正确写法:setForm 传入全新对象替换
    setForm({
      ...form,//展开对象
      name:'John'
    })
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改Form:{form.name}</button>
    </div>
  );
}

export default App;
