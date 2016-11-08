import React from 'react';
import {render} from 'react-dom';
import {Router,Route,useRouteHistory,IndexRoute,browserHistory} from 'react-router';

import App from './pages';
import routes from './routes';

render(
		<Router history={browserHistory}>
			{routes}
		</Router>,
		document.getElementById('root')
	)
