import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_IS_CITY_SELECTOR_SHOW,
    ACTION_SET_IS_CURRENT_FROM_SELECT,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_LOADING_CITY_DATA,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_IS_DEPART_DATE_SELECTOR_SHOW,
    ACTION_SET_HIGH_SPEED,
} from './actions'

export default {
    from(state = '北京',action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_FROM:
                return payload
            default:
                return state
        }
    },
    to(state = '天津',action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TO:
                return payload
            default:
                return state
        }
    },
    isCitySelectorShow(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_IS_CITY_SELECTOR_SHOW:
                return payload
            default:
                return state
        }
    },
    isCurrentFromSelect(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_IS_CURRENT_FROM_SELECT:
                return payload
            default:
                return state
        }
    },
    departDate(state = new Date(),action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_DEPART_DATE:
                return payload
            default:
                return state
        }
    },
    cityData(state = null,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_CITY_DATA:
                return payload
            default:
                return state
        }
    },
    isLoadingCityData(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_IS_LOADING_CITY_DATA:
                return payload
            default:
                return state
        }
    },
    isDepartDateSelectorShow(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_IS_DEPART_DATE_SELECTOR_SHOW:
                return payload
            default:
                return state
        }
    },
    highSpeed(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_HIGH_SPEED:
                return payload
            default:
                return state
        }
    },
}