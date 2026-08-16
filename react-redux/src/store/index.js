import { configureStore } from "@reduxjs/toolkit";
//导入子模块reducer
import counterReducer from './moudles/counterStore'

const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store