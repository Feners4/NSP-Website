import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import store from '../store';

import App from 'views/App';
import Home from 'views/Home';
import About from 'views/About';
import Cart from 'views/webcart';


console.log(store);
ReactDOM.render(
	<Provider store={store}>
		<Router history={ hashHistory }>
    		<Route path='/' component={ App }>
      			<IndexRoute component={ Home } />
      			<Route path='about' component={ About } />
      			<Route path='Cart' component={ Cart } />
    		</Route>
  		</Router>
  	</Provider>,	
  	document.getElementById('app') // eslint-disable-line
);
