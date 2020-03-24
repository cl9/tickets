import {
    createStore,
    combineReducers,
    applyMiddleware
  } from 'redux'
  import thunk from 'redux-thunk'
  import { composeWithDevTools } from 'redux-devtools-extension';
  import reducers from './reducers'
  import { ORDER_DEPART } from './constants' 
  
  export default createStore(
    combineReducers(reducers),
    {
      from:null,
      to:null,
      departDate:new Date(), // 选择的出发日期
      highSpeed:false, // 只显示高铁或动车
      trainList: [],
      orderType: ORDER_DEPART, // 排序类型：默认以出发时间早/晚排序
      onlyTickets: false, // 排序类型： 是否只看有票
      ticketsTypes: [], // 坐席类型数组
      checkedTicketsType: {}, // 选中的坐席类型
      trainTypes: [], // 车次类型数组
      checkedTrainType: {}, // 选中的车次类型
      fromStations: [], // 出发车站数组
      checkedFromStation: {}, // 选中的出发车站
      toStations: [], // 到达车站数组
      checkedToStation: {}, // 选中的到达车站
      fromTimeStart: 0, // 出发起始时间（h）
      fromTimeEnd: 24, // 出发截止时间（h）
      toTimeStart:0, // 到达起始时间（h）
      toTimeEnd:24, // 到达截止时间（h）
      isFilterSelecotrVisible:false // 是否显示综合筛选浮层
    },
    composeWithDevTools(applyMiddleware(thunk))
  )