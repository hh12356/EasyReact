//项目的根组件
//渲染逻辑：App->index.js->public/index.html(root)

function getName(){
  return 'jack';
}
const count=100;

const list=[
  {id:1001,name:'Vue'},
  {id:1002,name:'React'},
  {id:1003,name:'Angular'}
]

const isLogin=false;

//定义文章类型
const articleType=1 //0 1 3
//定义核心函数（根据文章类型返回不同的jsx模板）
function getArticleTem(){
  if(articleType==0){
    return <div>我是无图文章</div>
  }
  else if(articleType==1){
    return <div>我是单图文章</div>
  }
  else if(articleType==3){
    return <div>我是三图文章</div>
  }
}

function App() {
  return (
    <div className="App">
      this is App

      {/* JSX基础操作 */}
      {/* 使用引号传递字符串 */}
      {'this is a message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用和方法调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{color:'yellowgreen'}}>this is a div</div>

      {/* 实现列表渲染 */}
      {/* map 循环哪个结构 return结构 */}
      <ul>
        {/*注意：遍历渲染需要key绑定 */}
        {/* key的作用：React框架内部使用，用于提升更新性能 */}
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>

      {/* 实现基础条件渲染 */}
      {/* 逻辑与&& */}
      {isLogin&&<span>this is a span</span>}
      <br></br>
      {/* 三元运算 */}
      {isLogin?<span>jack</span>:<span>laoding...</span>}

      {/* 实现复杂条件渲染 */}
      {/* 调用函数渲染不同的模板 */}
      {getArticleTem()}

    </div>
  );
}

export default App;
