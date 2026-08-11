import { useEffect, useState } from "react";

const URL = 'http://geek.itheima.net/v1_0/channels'

function App() {
  //创建一个状态数据
  const [list,setList]=useState([])
  useEffect(()=>{
    //额外操作：获取频道列表
    async function getlist(){//async:异步函数且允许使用await,返回值一定为Promise对象
      const res = await fetch(URL)//await：阻塞执行
      const jsonRes = await res.json();
      console.log(jsonRes);
      setList(jsonRes.data.channels)
    }
    getlist()
  },[])//依赖项为空数组即只执行一次
  return (
    <div>
      this is App
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
