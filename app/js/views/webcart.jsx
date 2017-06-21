import React, { Component } from 'react';
import {addCart} from './Shop'; 
import { connect } from 'react-redux';


export class Cart extends Component {
	render() {
		console.log('cart', this.props.cart)
		return(
			<div className= "Webcart" id="Webcart">
				<Component cartItem={this.props.cartItem} />
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
  return { cart: state.cart };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
