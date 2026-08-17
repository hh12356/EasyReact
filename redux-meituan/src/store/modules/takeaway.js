//编写store

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
    name:'foods',
    initialState:{
        //商品列表
        foodsList:[],
        //菜单激活下标值
        activeIndex:0,
        //购物车列表
        cartList:[]
    },
    reducers:{
        setFoodsList(state,action){
            state.foodsList=action.payload
        },
        changeActiveIndex(state,action){
            state.activeIndex=action.payload
        },
        addCart(state,action){
            //是否添加过？
            const item = state.cartList.find(item=>item.id==action.payload.id)
            if(item){
                item.count++;
            }
            else{
                state.cartList.push(action.payload)
            }
        },
        //count增减
        increCount(state,action){
            //关键点：找到要修改谁
            const item = state.cartList.find(item=>item.id==action.payload.id);
            item.count++;
        },
        decreCount(state,action){
            const target = state.cartList.find(item=>item.id==action.payload.id);
            if(target.count==1){
                state.cartList=state.cartList.filter(item=>item.id!==target.id)
            }
            else{
                target.count--;
            }
        },

        clearCart(state){
            state.cartList=[];
        }
    }
})

//异步获取部分
const { setFoodsList,changeActiveIndex,addCart,increCount,decreCount,clearCart } = foodStore.actions
const fetchFoodsList = ()=>{
    return async (dispatch)=>{
        //编写异步逻辑
        const res = await axios.get('http://localhost:3004/takeaway')
        //调用dispatch函数提交action
        dispatch(setFoodsList(res.data))
    }
}

export { fetchFoodsList,changeActiveIndex,addCart,increCount,decreCount,clearCart }

const reducer = foodStore.reducer
export default reducer