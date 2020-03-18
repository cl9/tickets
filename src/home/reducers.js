import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_IS_CITY_SELECT_SHOW,
    ACTION_SET_IS_CURRENT_FROM_SELECT,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_IS_DEPART_DATE_SHOW,
    ACTION_SET_HIGH_SPEED,
} from './actions'

const homeReducer = (state,action) => {
    const { type, payload } = action
    switch(type){
        case ACTION_SET_FROM:
            return payload
        case ACTION_SET_TO:
            return payload
        case ACTION_SET_IS_CITY_SELECT_SHOW:
            return payload
        case ACTION_SET_IS_CURRENT_FROM_SELECT:
            return payload
        case ACTION_SET_DEPART_DATE:
            return payload
        case ACTION_SET_IS_DEPART_DATE_SHOW:
            return payload
        case ACTION_SET_HIGH_SPEED:
            return payload
        default:
            return payload
            
    }
}

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
    isCitySelectShow(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_IS_CITY_SELECT_SHOW:
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
    departDate(state = Date.now,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_DEPART_DATE:
                return payload
            default:
                return state
        }
    },
    isDepartDateShow(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_IS_DEPART_DATE_SHOW:
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