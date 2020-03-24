import { ORDER_DEPART, ORDER_DURATION } from '../query/constants'
export const ACTION_SET_FROM = 'ACTION_SET_FROM'
export const ACTION_SET_TO = 'ACTION_SET_TO'
export const ACTION_SET_DEPART_DATE = 'ACTION_SET_DEPART_DATE'
export const ACTION_SET_HIGH_SPEED = 'ACTION_SET_HIGH_SPEED'
export const ACTION_SET_TRAIN_LIST = 'ACTION_SET_TRAIN_LIST'
export const ACTION_SET_ORDER_TYPE = 'ACTION_SET_ORDER_TYPE'
export const ACTION_SET_ONLY_TICKETS = 'ACTION_SET_ONLY_TICKETS'
export const ACTION_SET_TICKETS_TYPES = 'ACTION_SET_TICKETS_TYPES'
export const ACTION_SET_CHECKED_TICKETS_TYPE = 'ACTION_SET_CHECKED_TICKETS_TYPE'
export const ACTION_SET_TRAIN_TYPES = 'ACTION_SET_TRAIN_TYPES'
export const ACTION_SET_CHECKED_TRAIN_TYPE = 'ACTION_SET_CHECKED_TRAIN_TYPE'
export const ACTION_SET_FROM_STATIONS = 'ACTION_SET_FROM_STATIONS'
export const ACTION_SET_CHECKED_FROM_STATION = 'ACTION_SET_CHECKED_FROM_STATION'
export const ACTION_SET_TO_STATIONS = 'ACTION_SET_TO_STATIONS'
export const ACTION_SET_CHECKED_TO_STATION = 'ACTION_SET_CHECKED_TO_STATION'
export const ACTION_SET_FROM_TIME_START = 'ACTION_SET_FROM_TIME_START'
export const ACTION_SET_FROM_TIME_END = 'ACTION_SET_FROM_TIME_END'
export const ACTION_SET_TO_TIME_START = 'ACTION_SET_TO_TIME_START'
export const ACTION_SET_TO_TIME_END = 'ACTION_SET_TO_TIME_END'
export const ACTION_SET_IS_FILTER_SELECOTR_VISIBLE = 'ACTION_SET_IS_FILTER_SELECOTR_VISIBLE'


export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}

export function setDepartDate(date) {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: date
    }
}

export function toggleHighSpeed() {
    return (dispatch, getState) => {
        const { highSpeed } = getState()

        dispatch({
            type: ACTION_SET_HIGH_SPEED,
            payload: highSpeed ? false : true
        })
    }
}

export function setTrainList(trainList) {
    return {
        type: ACTION_SET_TRAIN_LIST,
        payload: trainList
    }
}

export function toggleOrderType() {
    return (dispatch, getState) => {
        const { orderType } = getState()

        dispatch({
            type: ACTION_SET_ORDER_TYPE,
            payload: orderType === ORDER_DEPART ? ORDER_DURATION : ORDER_DEPART
        })
    }
}

export function toggleOnlyTickets() {
    return (dispatch, getState) => {
        const { onlyTickets } = getState()

        dispatch({
            type: ACTION_SET_ONLY_TICKETS,
            payload: onlyTickets ? false : true
        })
    }
}

export function setTicketsTypes(tiketsTypes) {
    return {
        type: ACTION_SET_TICKETS_TYPES,
        payload: tiketsTypes
    }
}

export function setCheckedTicketsTypes(checkedTicketsTypes) {
    return {
        type: ACTION_SET_CHECKED_TICKETS_TYPE,
        payload: checkedTicketsTypes
    }
}

export function setTrainTypes(trainTypes) {
    return {
        type: ACTION_SET_TRAIN_TYPES,
        payload: trainTypes
    }
}

export function setCheckedTrainTypes(selectedTrainType) {
    return {
        type: ACTION_SET_CHECKED_TRAIN_TYPE,
        payload: selectedTrainType
    }
}

export function setFromStations(fromStations) {
    return {
        type: ACTION_SET_FROM_STATIONS,
        payload: fromStations
    }
}

export function setCheckedFromStation(selectedFromStation) {
    return {
        type: ACTION_SET_FROM_STATIONS,
        payload: selectedFromStation
    }
}

export function setToStations(toStations) {
    return {
        type: ACTION_SET_TO_STATIONS,
        payload: toStations
    }
}

export function setCheckedToStation(selectedToStation) {
    return {
        type: ACTION_SET_CHECKED_TO_STATION,
        payload: selectedToStation
    }
}

export function setFromTimeStar(timeStart) {
    return {
        type: ACTION_SET_FROM_TIME_START,
        payload: timeStart
    }
}

export function setFromTimeEnd(timeEnd) {
    return {
        type: ACTION_SET_FROM_TIME_END,
        payload: timeEnd
    }
}

export function setToTimeStart(timeStart) {
    return {
        type: ACTION_SET_TO_TIME_START,
        payload: timeStart
    }
}

export function setToTimeEnd(timeEnd) {
    return {
        type: ACTION_SET_TO_TIME_END,
        payload: timeEnd
    }
}

export function showFilterSelecotrVisible() {
    return {
        type: ACTION_SET_IS_FILTER_SELECOTR_VISIBLE,
        payload: true
    }
}

export function hideFilterSelecotrVisible() {
    return {
        type: ACTION_SET_IS_FILTER_SELECOTR_VISIBLE,
        payload: false
    }
}