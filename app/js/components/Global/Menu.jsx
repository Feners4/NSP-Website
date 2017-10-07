import React, { Component } from 'react';
import { Link } from 'react-router';
//import { withRouter } from 'react-router';
import { hashHistory } from 'react-router';


import Logo from './nspstar.png';
import Logo2 from './nspred.png';
import HomeLogo from './HOME.png';
import HomeLogo2 from './HOME2.png';
import MusicLogo from './MUSIC.png';
import AboutLogo from './ABOUT.png';
import AboutLogo2 from './ABOUT2.png';
import ContactLogo from './CONTACT.png';
import ContactLogo2 from './CONTACT2.png';
import ShopLogo from './SHOP.png';
import ShopLogo2 from './SHOP2.png';

export default class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imgSrc: Logo,
			homeSrc: HomeLogo,
			aboutSrc: AboutLogo,
			shopSrc: ShopLogo,
			contactSrc: ContactLogo

		}
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.handleMouseOver2 = this.handleMouseOver2.bind(this);
		this.handleMouseOut2 = this.handleMouseOut2.bind(this);
		this.handleMouseOver3 = this.handleMouseOver3.bind(this);
		this.handleMouseOut3 = this.handleMouseOut3.bind(this);
		this.handleMouseOver4 = this.handleMouseOver4.bind(this);
		this.handleMouseOut4 = this.handleMouseOut4.bind(this);
		this.handleMouseOver5 = this.handleMouseOver5.bind(this);
		this.handleMouseOut5 = this.handleMouseOut5.bind(this);
		this.goHomePage = this.goHomePage.bind(this);
	}

	goHomePage() {
        hashHistory.push('/');
    }


	handleMouseOver() {
    	this.setState({
      		imgSrc: Logo2
    	});
  	}

  	handleMouseOut() {
    	this.setState({
      		imgSrc: Logo
    	});
  	}

  	handleMouseOver2() {
    	this.setState({
      		homeSrc: HomeLogo2 
    	});
  	}

  	handleMouseOut2() {
    	this.setState({
      		homeSrc: HomeLogo
    	});
  	}

  	handleMouseOver3() {
    	this.setState({
      		aboutSrc: AboutLogo2 
    	});
  	}

  	handleMouseOut3() {
    	this.setState({
      		aboutSrc: AboutLogo
    	});
  	}

  	handleMouseOver4() {
    	this.setState({
      		shopSrc: ShopLogo2 
    	});
  	}

  	handleMouseOut4() {
    	this.setState({
      		shopSrc: ShopLogo
    	});
  	}

  	handleMouseOver5() {
    	this.setState({
      		contactSrc: ContactLogo2 
    	});
  	}

  	handleMouseOut5() {
    	this.setState({
      		contactSrc: ContactLogo
    	});
  	}

  	render() {
    	return (
      		<div className= 'topMenu'>
      			<div className='Menu' id='Menu'>
        			<Link to='/'><img onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2} src={this.state.homeSrc}></img></Link> <Link to='/About'><img onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3} src={this.state.aboutSrc}></img></Link> <img src={this.state.imgSrc} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.goHomePage}></img> <a href="http://nspnyc.bigcartel.com/"><img onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4} src={this.state.shopSrc}></img></a>  <Link to='/Cart'><img onMouseOver={this.handleMouseOver5} onMouseOut={this.handleMouseOut5} src={this.state.contactSrc}></img></Link>
        			<hr />
      			</div>
      		</div>
    	);
  	}
}
