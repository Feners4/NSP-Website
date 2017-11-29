import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../actions';

import SeltzShirt from './seltzshirt.jpg';
import Slideone from './slideSeltzOne';
import Slidetwo from './slideSeltzTwo';
import RightArrow from './rightarrow';
import LeftArrow from './leftarrow';

export class ProductPage3 extends  Component {

	constructor(props) {
		super(props);
		this.state = {
			slideCount: 1, 
			value: 'medium', cartData: {}   
		}

		this.nextSlide = this.nextSlide.bind(this);
    	this.previousSlide = this.previousSlide.bind(this);
    	this.handleClick = this.handleClick.bind(this);
        this.change = this.change.bind(this);
	}

	handleClick() {
        let cart = {price:25,item:this.description.innerHTML,size:this.state.value};
        this.props.onCartAdd(cart);
        console.log(cart);
        this.itemSelection(cart);
    } 

    change(e){
        this.setState({value: e.target.value})
    }

    itemSelection(cart){
        let userItem = cart;
        let userSelection = cart
        if (userItem == "shirt1") {
           let itemPrice = 20.00;
        }
    }

    componentDidMount () {
  		window.scrollTo(0, 0)
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
						<div id='item' ref={i=>this.description=i}>TONY SELTZER LOGO TEE</div>
						<div id='description'>Black tee 100% cotton with red silkscreened logo on front and back.</div>
						<select id="size2" onChange={this.change} value={this.state.value}>
                        	<option value="medium">Medium</option>
                        	<option value="large">Large</option>
                        	<option value="x-large">X-large</option>
                      	</select>
						<button onClick={this.handleClick} className="addit">ADD TO CART</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onCartAdd: (cart) => {
            dispatch(addCart(cart));
        },
    }
}

function mapStateToProps(state) {
   return {
      cart: state.cart
   };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage3);