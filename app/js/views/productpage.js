import React, { Component } from 'react';
import CamoHat from './camodye.jpeg';

export default class ProductPage extends  Component {

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
				<img src={ CamoHat } />
				<div id='InfoSquare'>
					<div id='wrapper'>
						<div id='item'>NOC NOC HAT</div>
						<div id='description'>Embroidery on hand-dyed cotton cap.</div>
						<div id='sizedescription'>One size fits all</div>
						<button className="addit">SOLD OUT</button>
					</div>

				</div>
			</div>	 
		);
	}

}