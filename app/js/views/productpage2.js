import React, { Component } from 'react';
import JagPyramids from './JAGUARLOGO.png';

export default class ProductPage2 extends  Component {

	//constructor(props) {
		//super(props);
		//this.state = {
			//imgSrc: Logo1 
		//}
		//this.handleMouseOver = this.handleMouseOver.bind(this);
		//this.handleMouseOut = this.handleMouseOut.bind(this);
	//}

	render() {
		return (
			<div className= "ProductPage" id="ProductPage">
				<img src={ JagPyramids } />
				<div id='InfoSquare'>
					<div id='wrapper'>
						<div id='item'>JAGUAR TEE</div>
						<div id='description'>Black tee 100% cotton with white silkscreen graphic.</div>
						<div id='sizedescription'>One size fits all</div>
						<button className="addit">SOLD OUT</button>
					</div>

				</div>
			</div>	 
		);
	}

}