import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../actions';

import TonyTape from './TonyTape.png';


export class ProductPage5 extends  Component {

	constructor(props) {
		super(props);
		this.state = {
			slideCount: 1,
			value: 'medium', cartData: {}  
		}
		this.handleClick = this.handleClick.bind(this);
    this.change = this.change.bind(this);
	}

	handleClick() {
        let cart = {price:25,item:this.description.innerHTML};
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

	render() {
		return (
			<div className= "ProductPage" id="ProductPage">
      <img src={TonyTape}></img>
				<div id='InfoSquare'>
					<div id='wrapper'>
						<div id='item' ref={i=>this.description=i}>Tony Seltzer Tape</div>
						<div id='description'></div>
						<button onClick={this.handleClick} className="addit">ADD TO CART</button>
					</div>

				</div>
			</div>	 
		);
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage5);