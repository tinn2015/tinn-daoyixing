import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';

import App from './pages';
import Detail from './pages/detail'
import SubPage from './components/subPage/subPage'
import Insure from './pages/insure'

const routes = (
	<Route>
		<Route path="/" component={App} />
		<Route path="/detail" component={Detail}/>
		<Route path="/detail/subPage/:id" component={SubPage}/>	
		<Route path="/insure" component={Insure} />	
	</Route>
	)

export default routes