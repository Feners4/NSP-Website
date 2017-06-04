import React, { Component } from 'react';
import Splash from './splash';

import Menu from 'components/Global/Menu';

export default class About extends Component {
	constructor(){
  		super();
  		this.state = {
    		splash: true
  		}
  		this.logoClicked = this.logoClicked.bind(this);

  	}

	//componentDidMount() {
  		//setTimeout (() => {
  		//this.setState({splash: false});
  		//}, 10000);
	//}

	logoClicked(props) {
		this.setState({splash:false});
		console.log('works');
	}
  	render() {
  		if (this.state.splash) {
  			return <Splash onLogoClicked={this.logoClicked.bind(this)} />
  		}

    	const { children } = this.props; // eslint-disable-line

    	return (
      		<div className='About'>
        		<Menu />
        		{ children }
      		</div>
    	);
  	}
}
