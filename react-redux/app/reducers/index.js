import { INCREMENT_COUNTER,DECREMENT_COUNTER,FAIL_GET_USER_DATA,GET_USER_DATA } from '../actions'
import { combineReducers } from 'redux'

const counter = (state=1,action) => {
	switch (action.type){
		case INCREMENT_COUNTER:
			return state + 1
		case DECREMENT_COUNTER:
			return state - 1
		default:
			return state
	}
}

const getUserData = (state=[{name:'aa'},{name:'bb'}],action) => {
	switch(action.type){
		case GET_USER_DATA:
			return state = action.payload
		case FAIL_GET_USER_DATA:
			return state
		default:
			return state 
	}
}
const rootReducer = combineReducers({
	getUserData,counter
})
export default rootReducer

