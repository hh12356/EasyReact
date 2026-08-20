import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import DailyBill from './components/DailyBill'

const Month = () => {
    //按月做数据分组
    const billList = useSelector(state=>state.bill.billList)
    const monthGroup = useMemo(()=>{
        //return计算之后的值
        return _.groupBy(billList,(item)=>dayjs(item.date).format('YYYY年MM月'))
    },[billList])

    //控制时间选择框的打开关闭
    const [dateVisible,setDateVisible] = useState(false) 

    //时间状态
    const [currentDate,setCurrentDate] = useState(()=>{
        return dayjs(new Date()).format('YYYY年MM月')
    })

    const [currentMonthList,setMonthList] = useState([])
    

    //计算收支
    const monthResult = useMemo(()=>{
        const pay = currentMonthList.filter(item=>item.type=='pay').reduce((a,c)=>a+c.money,0)
        const income = currentMonthList.filter(item=>item.type=='income').reduce((a,c)=>a+c.money,0)
        return{
            pay,
            income,
            total:income-pay
        }
    },[currentMonthList])

    //确认回调
    const onComfirm=(date)=>{
        setDateVisible(false)
        const formatDate = dayjs(date).format('YYYY年MM月')
        setCurrentDate(formatDate)
    }

    useEffect(()=>{
        setMonthList(monthGroup[currentDate]||[])
    },[currentDate,monthGroup])

    //当前月按日来做分组
    const dayGroup = useMemo(()=>{
      //先按时间倒序排，保证单日列表越靠近现在越靠上
      const sorted = [...currentMonthList].sort((a,b) => dayjs(b.date) - dayjs(a.date))
      const groupData = _.groupBy(sorted,(item)=>dayjs(item.date).format('YYYY年MM月DD日'))
      const keys = Object.keys(groupData).sort((a,b) => dayjs(b,'YYYY年MM月DD日') - dayjs(a,'YYYY年MM月DD日'))
      return {
        groupData,
        keys
      }
    },[currentMonthList])

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={()=>setDateVisible(true)}>
            <span className="text">
              {currentDate+''}
            </span>
            <span className={classNames('arrow',dateVisible&&'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={new Date()}

            onCancel={()=>setDateVisible(false)}
            onConfirm={onComfirm}
          />
        </div>
        {/* 单日列表统计 */}
        {
          dayGroup.keys.map(key=>{
            return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]||[]}/>
          })
        }
      </div>
    </div >
  )
}

export default Month