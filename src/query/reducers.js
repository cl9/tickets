import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_HIGH_SPEED,
    ACTION_SET_TRAIN_LIST,
    ACTION_SET_ORDER_TYPE,
    ACTION_SET_ONLY_TICKETS,
    ACTION_SET_TICKETS_TYPES,
    ACTION_SET_CHECKED_TICKETS_TYPE,
    ACTION_SET_TRAIN_TYPES,
    ACTION_SET_CHECKED_TRAIN_TYPE,
    ACTION_SET_FROM_STATIONS,
    ACTION_SET_CHECKED_FROM_STATION,
    ACTION_SET_TO_STATIONS,
    ACTION_SET_CHECKED_TO_STATION,
    ACTION_SET_FROM_TIME_START,
    ACTION_SET_FROM_TIME_END,
    ACTION_SET_TO_TIME_START,
    ACTION_SET_TO_TIME_END,
    ACTION_SET_IS_FILTER_SELECOTR_VISIBLE
} from './actions'

export default {
    from(state = null,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_FROM:
                return payload
            default:
                return state
        }
    },
    to(state = null,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TO:
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
    highSpeed(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_HIGH_SPEED:
                return payload
            default:
                return state
        }
    },
    trainList(state = [],action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TRAIN_LIST:
                return payload
            default:
                return state
        }
    },
    orderType(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_ORDER_TYPE:
                return payload
            default:
                return state
        }
    },
    onlyTickets(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_ONLY_TICKETS:
                return payload
            default:
                return state
        }
    },
    ticketsTypes(state = [],action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TICKETS_TYPES:
                return payload
            default:
                return state
        }
    },
    checkedTicketsType(state = {},action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_CHECKED_TICKETS_TYPE:
                return payload
            default:
                return state
        }
    },
    trainTypes(state = [],action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TRAIN_TYPES:
                return payload
            default:
                return state
        }
    },
    checkedTrainType(state = {},action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_CHECKED_TRAIN_TYPE:
                return payload
            default:
                return state
        }
    },
    fromStations(state = [],action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_FROM_STATIONS:
                return payload
            default:
                return state
        }
    },
    checkedFromStation(state = {},action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_CHECKED_FROM_STATION:
                return payload
            default:
                return state
        }
    },
    toStations(state = [],action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TO_STATIONS:
                return payload
            default:
                return state
        }
    },
    checkedToStation(state = [],action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_CHECKED_TO_STATION:
                return payload
            default:
                return state
        }
    },
    fromTimeStart(state = 0,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_FROM_TIME_START:
                return payload
            default:
                return state
        }
    },
    fromTimeEnd(state = 24,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_FROM_TIME_END:
                return payload
            default:
                return state
        }
    },
    toTimeStart(state = 0,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TO_TIME_START:
                return payload
            default:
                return state
        }
    },
    toTimeEnd(state = 24,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_TO_TIME_END:
                return payload
            default:
                return state
        }
    },
    isFilterSelecotrVisible(state = false,action){
        const { type, payload } = action
        switch(type){
            case ACTION_SET_IS_FILTER_SELECOTR_VISIBLE:
                return payload
            default:
                return state
        }
    },
}
