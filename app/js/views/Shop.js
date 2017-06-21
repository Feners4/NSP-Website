import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../actions';
import { withRouter } from 'react-router';
//import { Cart } from './webcart';


import CamoHat from './camodye.jpeg';
import TonyTape from './TonyTape.png';
import RegularHat from './regularhat.jpg';
import JaguarShirt from './JAGUARLOGO.png';
import SeltzShirt from './seltzshirt.jpg';
import NocHoodie from './NOCNOCHOODIE.png';

export class WebShop extends Component {
    constructor(props){
        super(props);
        this.state = {value: 'medium', cartData: {} };
        this.handleClick = this.handleClick.bind(this);
        this.change = this.change.bind(this);
        this.goProductPage = this.goProductPage.bind(this);
        this.goProductPage2 = this.goProductPage2.bind(this);
        this.goProductPage3 = this.goProductPage3.bind(this);
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

    goProductPage() {
        this.props.router.push('/ProductPage');
    }

     goProductPage2() {
        this.props.router.push('/ProductPage2');
    }

    goProductPage3() {
        this.props.router.push('/ProductPage3');
    }

    render() {
        return (
            <div className='Webshop' id='Webshop'>
                <ul id="Productlist">
                    <div className='Product'>
                      <img src={CamoHat} onClick={this.goProductPage}></img>
                      <div id='infoname'>NOC NOC HAT (CAMO)</div>
                      <div id='infoprice'>40.00</div>
                    </div>
                    <div className='Product'>
                      <img src={JaguarShirt} onClick={this.goProductPage2}></img>
                      <div id='infoname'>JAGUAR PYRAMIDS T-SHIRT</div>
                      <div id='infoprice'>25.00</div>
                    </div>
                    <div className='Product'>
                      <img src={SeltzShirt} onClick={this.goProductPage3}></img>
                      <div id='infoname'>JAGUAR PYRAMIDS T-SHIRT</div>
                      <div id='infoprice'>25.00</div>
                    </div>
                    <div className='Product'>
                      <img src={NocHoodie} onClick={this.goProductPage}></img>
                      <div id='infoname'>JAGUAR PYRAMIDS T-SHIRT</div>
                      <div id='infoprice'>25.00</div>
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
      cart: state.cart
   };
}

export default connect(mapStateToProps,mapDispatchToProps)(WebShop);