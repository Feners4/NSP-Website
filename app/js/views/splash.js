import React, { Component } from 'react';
import Woods from './woods.jpeg';
import Logo1 from './whitestar.png';
import Logo2 from './redstar.png';

export default class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: Logo1 
			//this.toggleShowHome = this.toggleShowHome.bind(this);
		}
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	toggleShowHome(property){
   		this.setState((prevState)=>({[property]:!prevState[property]}));
   		//this.props.triggerClickOnLogo();

	 }

	handleMouseOver() {
    	this.setState({
      		imgSrc: Logo2 
    	});
  	}

  	handleMouseOut() {
    	this.setState({
      		imgSrc: Logo1
    	});
  	}

	render() {
		return(
			<div id='Splashwrapper'>
        <div id="SplashButton">
          <img id='logoc' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} onClick={this.props.onLogoClicked}></img>
        </div>
      </div>
    );
	}
}
