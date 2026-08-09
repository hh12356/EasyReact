
function App() {
  //基本绑定
  // const handleClick=()=>{
  //   console.log('on Click');
  // }
  //事件参数e
  // const handleClick=(e)=>{
  //   console.log('on Click',e);
  // }
  //传递自定义参数
  // const handleClick=(name)=>{
  //   console.log('on Click',name);
  // }
  //同时传递事件参数和自定义参数
  const handleClick=(name,e)=>{
    console.log('on Click',name,e);
  }
  return (
    <div className="App">
      <button onClick={(e)=>handleClick('Jack',e)}>CLick me</button>
    </div>
  );
}

export default App;
