import 'whatwg-fetch'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const GET_USER_DATA = 'GET_USER_DATA'
export const FAIL_GET_USER_DATA = 'FAIL_GET_USER_DATA'



export function increment(){
	return{
		type:INCREMENT_COUNTER
	}
}
export  function decrement(){
	return{
		type:DECREMENT_COUNTER
	}
}

 export const getUserData = () => {
		return{
				type:GET_USER_DATA,
				payload:[{name:'tinn'},{name:'ben'}]
			}
}
export const getDataAsync = () => {
	return (dispatch,getSatte) => {
		return fetch('../testData.json')
		.then((res) => {return res.json()})
		.then((data) => {
			dispatch({
				type:GET_USER_DATA,
				payload:data
			})
		})
		.catch((err) => {console.log(err.message)})
	}
	
}


