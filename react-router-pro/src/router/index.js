import Login from '../page/Login'
import Article from '../page/Article'
import Layout from '../page/Layout'
import Board from '../page/Board'
import About from '../page/About'
import NotFound from '../page/NotFound'
import { createBrowserRouter,createHashRouter } from 'react-router-dom'

const router = createBrowserRouter([//两种路由模式：history hash(当前为history)
    {
        path:'/',
        element:<Layout/>,
        children:[//嵌套路由配置
            {  
                path:'board',
                index:true,//默认二级路由
                element:<Board/>
            },
            {  
                path:'about',
                element:<About/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/article/:id/:name',
        element:<Article/>
    },
    {//404兜底路由配置
        path:'*',
        element:<NotFound/>
    }
])

export default router