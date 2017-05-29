import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../actions';


import Seltzshirt from './seltzshirt.jpg';


class WebShop extends Component {
    constructor(){
        super();
        this.state = {value: 'medium'}
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
        return (
            <div className='Webshop' id='Webshop'>
                <li id="Productlist">
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
                      <img src={Seltzshirt}></img>
                      <button onClick={this.handleClick} className="addit">Add to cart</button>
                      <select id="size" onChange={this.change} value={this.state.value}>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X-large</option>
                      </select>
                    </div>
                </li>
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
    SomeDataProperty: state.Reducer // prop Reducer was taken from your reducer.js because it was passed into here from the connect API
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebShop);