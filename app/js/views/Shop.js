import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../actions';


import Seltzshirt from './camodye.jpeg';
import TonyTape from './TonyTape.png';
import RegularHat from './regularhat.jpg';


export class WebShop extends Component {
    constructor(props){
        super(props);
        this.state = {value: 'medium', cartData: {} };
        this.handleClick = this.handleClick.bind(this);
        this.change = this.change.bind(this);
    }

    handleClick() {
        let cart = {price:0,item:"userselection",size:this.state.value};
        this.props.onCartAdd(cart);
    } 

    change(e){
        this.setState({value: e.target.value})
    }

    itemSelection(){
        let userOrder = {price:0,item:"",size:""};
        let userItem = "";
        if (userItem == "shirt1") {
           let itemPrice = 20.00;
        }
    }


    render() {
        console.log('aa');
        return (
            <div className='Webshop' id='Webshop'>
                <ul id="Productlist">
                    <div className='Product'>
                      <img src={Seltzshirt}></img>
                      <button onClick={this.handleClick} className="addit">Add to cart</button>
                      <select id="size" onChange={this.change} value={this.state.value}>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X-large</option>
                      </select>
                    </div>
                    <div className='Product'>  
                      <img src={RegularHat}></img>
                      <button onClick={this.handleClick} className="addit">Add to cart</button>
                      <select id="size" onChange={this.change} value={this.state.value}>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X-large</option>
                      </select>
                    </div>
                    <div className='Product'>  
                      <img src={TonyTape}></img>
                      <button onClick={this.handleClick} className="addit">Add to cart</button>
                      <select id="size" onChange={this.change} value={this.state.value}>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X-large</option>
                      </select>
                    </div>
                </ul>
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
      cartItem: state.cart.item
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(WebShop);