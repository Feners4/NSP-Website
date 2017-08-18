import React, { Component } from 'react';
import {addCart} from './Shop';
import { removeCart } from '../../actions'; 
import { connect } from 'react-redux';

export class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {items: this.props.cart,cart: [],total: 0};
	}

	componentWillReceiveProps(nextprops) {
     	this.setState({
      		items: nextprops.cart
     	})
    }

	handleClick(item) {
        this.props.onCartRemove(item);
    } 

	itemBucket(item) {
		this.state.cart.push(this.state.items);
		this.countTotal();
	}

	countTotal() {
    	return this.state.items.reduce((acc, item) => {
      		return acc + item.price;
    	}, 0)
  	}

  	deleteItem() {
  		return this.state.items.reduce((acc, item) => {
      		return this.props.onCartRemove(item);
    	})
  	}

	componentDidMount () {
  		window.scrollTo(0, 0);
  		this.itemBucket();
	}

	render() {
		return(
			<div className= "Webcart" id="Webcart">
				<div id='WebcartWrapper'>
					<ul id='webCartList'>
						{this.state.items.map((item, index) => {
    						return <li className='cartItems' key={'cartItems_'+index}>
        						<h4>{item.item}</h4>
        						<p>Size: {item.size}</p>
        						<p>Price: {item.price}</p>
        						<button onClick={() => this.handleClick(item)}>Remove</button>
    						</li>
						})}
					</ul>
					<div>Total: ${this.countTotal()}</div>
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
        onCartRemove: (item) => {
            dispatch(removeCart(item));
        },
    }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
