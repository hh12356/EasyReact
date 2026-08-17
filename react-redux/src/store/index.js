import { configureStore } from "@reduxjs/toolkit";
//导入子模块reducer
import counterReducer from './moudles/counterStore'
import channelReducer from './moudles/channelStore'

const store = configureStore({
    reducer:{
        counter:counterReducer,
        channel:channelReducer
    }
})

export default store