export const ACTION_SET_FROM = 'ACTION_SET_FROM'
export const ACTION_SET_TO = 'ACTION_SET_TO'
export const ACTION_SET_IS_CITY_SELECT_SHOW = 'ACTION_SET_IS_CITY_SELECT_SHOW'
export const ACTION_SET_IS_CURRENT_FROM_SELECT = 'ACTION_SET_IS_CURRENT_FROM_SELECT'
export const ACTION_SET_DEPART_DATE = 'ACTION_SET_DEPART_DATE'
export const ACTION_SET_IS_DEPART_DATE_SHOW = 'ACTION_SET_IS_DEPART_DATE_SHOW'
export const ACTION_SET_HIGH_SPEED = 'ACTION_SET_HIGH_SPEED'

export function setFrom(from){
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}

export function setTo(to){
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}

export function setDepartDate(departDate){
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: departDate
    }
}

export function toggleHighSpeed(){
    return (dispatch, getState) => {
        const { highSpeed } = getState()
        dispatch({
            type: ACTION_SET_HIGH_SPEED,
            payload: !highSpeed
        })
    }
}

export function showCitySelector(isCurrentFromSelect){
    return (dispatch) => {
        dispatch({
            type: ACTION_SET_IS_CITY_SELECT_SHOW,
            payload: true
        })

        dispatch({
            type: ACTION_SET_IS_CURRENT_FROM_SELECT,
            payload: isCurrentFromSelect
        })
    }
}

export function hideCitySelector(){
    return {
        type: ACTION_SET_IS_CITY_SELECT_SHOW,
        payload: false
    }
}

export function setSelectedCity(city){
    return (dispatch, getState) => {
        const { isCurrentFromSelect } = getState()
        if(isCurrentFromSelect){
            dispatch(setFrom(city))
        }else{
            dispatch(setTo(city))
        }
    }
} 

export function showDateSelector(){
    return {
        type: ACTION_SET_IS_DEPART_DATE_SHOW,
        payload: true
    }
}

export function hideDateSelector(){
    return {
        type: ACTION_SET_IS_CITY_SELECT_SHOW,
        payload: false
    }
}

export function exchangeFromTo(){
    return (dispatch, getState) => {
        const { from, to } = getState()
        dispatch(setFrom(to))
        dispatch(setTo(from))
    }
}
