import { Outlet,Link } from "react-router-dom"

const Layout = ()=>{
    return (
        <div>
            一级路由Layout
            <br/>
            <Link to='/board'>面板</Link>
            <br/>
            <Link to='/about'>关于</Link>
            
            {/* 二级路由出口 */}
            <Outlet/>
        </div>
    )
}

export default Layout