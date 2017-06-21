import React, { Component } from 'react';
import SeltzShirt from './seltzshirt.jpg';
import Slideone from './slideSeltzOne';
import Slidetwo from './slideSeltzTwo';
import RightArrow from './rightarrow';
import LeftArrow from './leftarrow';

export default class ProductPage3 extends  Component {

	constructor(props) {
		super(props);
		this.state = {
			slideCount: 1 
		}

		this.nextSlide = this.nextSlide.bind(this);
    	this.previousSlide = this.previousSlide.bind(this);
	}

	render() {
		return (
			<div className= "ProductPage" id="ProductPage">
				<div id='slider'>
					{this.state.slideCount === 1 ? <Slideone /> : null}
					{this.state.slideCount === 2 ? <Slidetwo /> : null}
					
					<RightArrow nextSlide={this.nextSlide} />
        			<LeftArrow previousSlide={this.previousSlide} />
					
				</div>
				<div id='InfoSquare'>
					<div id='wrapper'>
						<div id='item'>TONY SELTZER LOGO TEE</div>
						<div id='description'>Black tee 100% cotton with red silkscreened logo on front and back.</div>
						<button className="addit">ADD TO CART</button>
					</div>

				</div>
			</div>	 
		);
	}

	 nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
  	}

  	previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
  	}

}