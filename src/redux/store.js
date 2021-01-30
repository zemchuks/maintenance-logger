import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logs } from './logReducer'
import { techs } from './techReducer'
import thunk  from 'redux-thunk'

const initialState = {}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            log: logs,
            tech: techs
        }),
        initialState, 
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}