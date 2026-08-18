import { Link,useNavigate } from "react-router-dom"

const Login = ()=>{
    const navigate = useNavigate()
    return (
        <div>
            这是登录页
            <br/>
            {/* 声明式写法 */}
            <Link to='/article'>跳转至文章页</Link>
            <br/>
            {/* 命令式写法 */}
            <button onClick={()=>navigate('/article')}>跳转至文章页</button>
            <br/>

            <button onClick={()=>navigate('/article?id=1001&name=jack')}>searchParams传参</button>
            <br/>
            <button onClick={()=>navigate('/article/1002/jack')}>Params传参</button>
        </div>
)
}

export default Login