import React, { Component } from 'react';

import Drawing from './drawing.png';

export default class AboutNSP extends Component {
	render() {
		return(
			<div className= "AboutNSP" id="AboutNSP">
				<img src={ Drawing }></img>
				<div id='AboutBio'>
					Nocturnal Sons Posse is an independent record label
					based in New York City that represents artists including
					Czarquan, Donrez, Mikey Fleece, and Tony Seltzer.
				</div>
			</div>
		);
	}
}

