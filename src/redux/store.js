import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logReducer from './logReducer'
import thunk  from 'redux-thunk'


const initialState = {}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            log: logReducer
        }),
        initialState, 
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}
