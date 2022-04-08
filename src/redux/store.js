import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, violationReducer } from './reducers'
import { themeReducer } from '../redux/theme/reducer'

const rootReducer = combineReducers({
	userReducer,
	violationReducer,
	themeReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))
