import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCart } from '../../actions';
import { withRouter } from 'react-router';
//import { Cart } from './webcart';


import CamoHat from './camodye.jpeg';
import TonyTape from './TonyTape.png';
import RegularHat from './regularhat.jpg';
import JaguarShirt from './JAGUARLOGO.png';
import SeltzShirt from './SELTZER LOGO.png';
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
        this.goProductPage4 = this.goProductPage4.bind(this);
        this.goProductPage5 = this.goProductPage5.bind(this);
    }

    handleClick() {
        let cart = {price:this.description2.innerHTML,item:this.description.innerHTML,size:this.state.value};
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

    goProductPage() {
        this.props.router.push('/ProductPage');
    }

     goProductPage2() {
        this.props.router.push('/ProductPage2');
    }

    goProductPage3() {
        this.props.router.push('/ProductPage3');
    }

    goProductPage4() {
        this.props.router.push('/ProductPage4');
    }

    goProductPage5() {
        this.props.router.push('/ProductPage5');
    }

    render() {
        return (
            <div className='Webshop' id='Webshop'>
                <ul id="Productlist">
                    <div className='Product'>
                      <img src={CamoHat} onClick={this.goProductPage}></img>
                      <div id='infoname'>NOC NOC HAT (CAMO)</div>
                      <div id='infoprice'>Sold Out</div>
                    </div>
                    <div className='Product'>
                      <img src={JaguarShirt} onClick={this.goProductPage2}></img>
                      <div id='infoname'>JAGUAR PYRAMIDS T-SHIRT</div>
                      <div id='infoprice'>Sold Out</div>
                    </div>
                    <div className='Product'>
                      <img src={SeltzShirt} onClick={this.goProductPage3}></img>
                      <div id='infoname'>Tony Seltzer T-SHIRT</div>
                      <div id='infoprice'>25.00</div>
                    </div>
                    <div className='Product'>
                      <img src={NocHoodie} onClick={this.goProductPage4}></img>
                      <div id='infoname'>NOC NOC Hoodie</div>
                      <div id='infoprice'>45.00</div>
                    </div>
                    <div className='Product'>  
                      <img src={RegularHat}></img>
                      <div id='infoname'>NOC NOC HAT</div>
                      <div id='infoprice'>Sold Out</div>
                    </div>
                    <div className='Product'>  
                      <img src={TonyTape} onClick={this.goProductPage5}></img>
                      <div id='infoname'>Tony Seltzer</div>
                      <div id='infoprice'>20.00</div>
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