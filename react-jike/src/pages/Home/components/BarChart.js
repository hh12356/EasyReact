//柱状图组件

import * as echarts from 'echarts'
import { useEffect, useRef } from 'react';

//1.把功能代码放在这个组件中
//2.把可变的部分抽象成参数

const BarChart=({title})=>{

    const chartRef = useRef(null)
    useEffect(()=>{
        //保证图表可用再渲染
        //1.获取要渲染图表的dom节点
        const chartDom = chartRef.current;
        //2.初始化生成图表实例对象
        const myChart = echarts.init(chartDom);
        //3.准备图表参数
        const option = {
            title:{
                text:title
            },
            xAxis: {
                type: 'category',
                data: ['vue','React','Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [30,45,25],
                type: 'bar'
                }
            ]
        };
        //4.使用图表参数实现渲染
        option && myChart.setOption(option);
    },[])
        
    return <div ref={chartRef} style={{width:'500px',height:'400px'}}></div>

}

export default BarChart