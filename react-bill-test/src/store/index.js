//组合子模块 导出store实例

import { configureStore } from '@reduxjs/toolkit'
import billReducer from './moudles/billStore'

const store = configureStore({
    reducer:{
        bill:billReducer
    }
})

export default store