export const ACTION_SET_FROM = 'ACTION_SET_FROM'
export const ACTION_SET_TO = 'ACTION_SET_TO'
export const ACTION_SET_IS_CITY_SELECTOR_SHOW = 'ACTION_SET_IS_CITY_SELECTOR_SHOW'
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA'
export const ACTION_SET_IS_LOADING_CITY_DATA = 'ACTION_SET_IS_LOADING_CITY_DATA'
export const ACTION_SET_IS_CURRENT_FROM_SELECT = 'ACTION_SET_IS_CURRENT_FROM_SELECT'
export const ACTION_SET_DEPART_DATE = 'ACTION_SET_DEPART_DATE'
export const ACTION_SET_IS_DEPART_DATE_SELECTOR_SHOW = 'ACTION_SET_IS_DEPART_DATE_SELECTOR_SHOW'
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

export function setCityData(cityData){
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
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
            type: ACTION_SET_IS_CITY_SELECTOR_SHOW,
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
        type: ACTION_SET_IS_CITY_SELECTOR_SHOW,
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

        dispatch(hideCitySelector())
    }
} 

export function showDateSelector(){
    return {
        type: ACTION_SET_IS_DEPART_DATE_SELECTOR_SHOW,
        payload: true
    }
}

export function hideDateSelector(){
    return {
        type: ACTION_SET_IS_DEPART_DATE_SELECTOR_SHOW,
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

export function fetchCityList(){
    return (dispatch,getState) => {
        const { isLoadingCityData } = getState()

        if(isLoadingCityData){
            return 
        }

        const cache = JSON.parse(localStorage.getItem('cityDataCache'))
        if(cache){
            const { expires=0, data} = cache 

            if(Date.now() - expires < 2 * 60 * 60 * 1000){
                // 两小时缓存有效期
                dispatch(setCityData(data))
                return 
            }   
        }

        dispatch({
            type: ACTION_SET_IS_LOADING_CITY_DATA,
            payload: true
        })

        fetch('http://localhost:80/rest/cities?_' + Date.now())
            .then(res => res.json())
            .then(cityData => {
                dispatch(setCityData(cityData))
                localStorage.setItem('cityDataCache',JSON.stringify({
                    expires: Date.now(),  
                    data: cityData
                }))
                dispatch({
                    type: ACTION_SET_IS_LOADING_CITY_DATA,
                    payload: false
                })
            })
            .catch(() => {
                dispatch({
                    type: ACTION_SET_IS_LOADING_CITY_DATA,
                    payload: false
                })
            })
    }
}
