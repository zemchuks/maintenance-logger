import * as types from './types'

// Logs Actions *****************
export const getLogs = async (dispatch) => {
    try {
        setLoading(true)

        const res = fetch('/logs')
        const data = await res.json()

        dispatch({
            type: types.GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Set loading
export const setLoading = () => {
    return {
        type: types.SET_LOADING
    }
}