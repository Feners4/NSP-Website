import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import store from '../store';

import App from 'views/App';
import Home from 'views/Home';
import Shop from 'views/Shop';
import Cart from 'views/webcart';
import AboutNSP from 'views/About';

ReactDOM.render(
	<Provider store={store}>
		<Router history={ hashHistory }>
    		<Route path='/' component={ App }>
      			<IndexRoute component={ Home } />
      			<Route path='Shop' component={ Shop } />
      			<Route path='Cart' component={ Cart } />
            <Route path='About' component={ AboutNSP } />
    		</Route>
  		</Router>
  	</Provider>,	
  	document.getElementById('app') // eslint-disable-line
);
