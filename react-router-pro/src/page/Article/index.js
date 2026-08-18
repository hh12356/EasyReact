import { useParams, useSearchParams } from "react-router-dom"

const Article = ()=>{
    // const [SearchParams] = useSearchParams()//useSearchParams返回数组
    // const id = SearchParams.get('id')
    // const name = SearchParams.get('name')

    const params = useParams()//使用时需修改router标签
    const id = params.id;
    const name = params.name;
    return <div>这是文章页{id}-{name}</div>
}

export default Article