import React,{Component} from 'react'
import { render } from 'react-dom'
import { Router,Route,userRouteHistory,IndexRoute,browserHistory } from 'react-router'
import routes from './routes'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './containers'

const store = createStore(
 	reducers,
 	applyMiddleware(thunk)	
 	)
render(
	<Provider store={store}>
		<Router history={ browserHistory }>
			{ routes }
		</Router>
	</Provider>,
	document.getElementById('root'),
	console.log("done")
) 