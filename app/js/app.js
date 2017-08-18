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
import ProductPage from 'views/productpage';
import ProductPage2 from 'views/productpage2';
import ProductPage3 from 'views/productpage3';
import ProductPage4 from 'views/productpage4';
import ProductPage5 from 'views/productpage5';

ReactDOM.render(
	<Provider store={store}>
		<Router history={ hashHistory }>
    		<Route path='/' component={ App }>
      			<IndexRoute component={ Home } />
      			<Route path='Shop' component={ Shop } />
      			<Route path='Cart' component={ Cart } />
            <Route path='About' component={ AboutNSP } />
            <Route path='ProductPage' component= { ProductPage } />
            <Route path='ProductPage2' component= { ProductPage2 } />
            <Route path='ProductPage3' component= { ProductPage3 } />
            <Route path='ProductPage4' component= { ProductPage4 } />
            <Route path='ProductPage5' component= { ProductPage5 } />
    		</Route>
  		</Router>
  	</Provider>,	
  	document.getElementById('app') // eslint-disable-line
);
