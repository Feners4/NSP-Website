import React, { Component } from 'react';
import {addCart} from './Shop'; 


export default class Cart extends Component {
	render() {
		return(
			<div className= "Webcart" id="Webcart">
				<Component cart={ cartItem } />
			</div>
		);
	}
}

