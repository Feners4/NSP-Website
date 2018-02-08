import React, { Component } from 'react';
import { withRouter } from 'react-router';


export default class Contact extends Component {
	render() {
		return(
			<div className= "ContactInfo" id="ContactInfo">
				<div id='ContactWrapper'>
					<div id='emailWrapper'>
						nocturnalsonsposse@gmail.com
					</div>

					<div id='instagramWrapper'>
						INSTAGRAM:
						<a href="http://www.instagram.com/nocturnalsonsposse"> 
							 @nocturnalsonsposse
						</a>
					</div>
				</div>
			</div>
		);
	}
}

