import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers'

export default createStore(
  combineReducers(reducers),
  {
    from:'北京',
    to:'深圳',
    isCitySelectorShow:false, // 城市选择浮层是否显示
    cityData:null, // 城市数据
    isLoadingCityData: false,
    isCurrentFromSelect:true, // 是否是出发城市触发的城市选择浮层
    departDate:new Date(), // 选择的出发日期
    isDepartDateSelectorShow:false, // 日期选择浮层是否显示
    highSpeed:false, // 只显示高铁或动车
  },
  composeWithDevTools(applyMiddleware(thunk))
)