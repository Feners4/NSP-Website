import React, { Component } from 'react';

import Drawing from './drawing.png';

export default class AboutNSP extends Component {
	render() {
		return(
			<div className= "AboutNSP" id="AboutNSP">
				<div id='AboutDiv'>	
					<img src={ Drawing }></img>
				</div>
			</div>
		);
	}
}

