import * as types from './types'

const initialState = {
    techs: null,
    loading: false,
    error: null
}

export const techs = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}