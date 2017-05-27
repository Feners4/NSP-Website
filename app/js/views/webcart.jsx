import React, { Component } from 'react';
import {addCart} from './About'; 


export default class Cart extends Component {
	render() {
		console.log({addCart});
		return(
			<div className= "Webcart" id="Webcart"></div>
		);
	}
}

