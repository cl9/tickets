import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default createStore(
  combineReducers(reducers),
  {
    from:'北京',
    to:'深圳',
    isCitySelectShow:false, // 城市选择浮层是否显示
    currentFromSelect:true, // 是否是出发城市触发的城市选择浮层
    departDate:'', // 选择的出发日期
    isDepartDateShow:false, // 日期选择浮层是否显示
    highSpeed:false, // 只显示高铁或动车
  },
  applyMiddleware(thunk)
)