//父传子
//1.父组件传递数据 子组件标签上绑定属性
//2.子组件接收属性 props的参数
function Son(props){
  //props:对象里包含父组件传递过来的所有的数据,是只读数据
  console.log(props);
  return <div>this is son {props.data} {props.children}</div>
}


function App() {
  const data1 = 'this is app name'
  const data2 = 'this is Hello World'
  return (
    <div>
      <Son data={data1}/>
      <Son data={data2}/>
      <Son //各种类型数据都能传
        name={"Jack"}
        age={19}
        isTrue={false}
        list={['vue','React']}
        obj={{name:'Jack'}}
        cb={()=>console.log(123)}
        child={<span>this is span</span>}
      />
      <Son>
        {/* 组件标签内内容自动记录为children属性 */}
        <span>this is span</span>
      </Son>
    </div>
  );
}

export default App;
