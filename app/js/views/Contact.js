import React, { Component } from 'react';
import { withRouter } from 'react-router';


export default class Contact extends Component {
	render() {
		return(
			<div className= "ContactInfo" id="ContactInfo">
				<div id='ContactWrapper'>
					EMAIL:
					nocturnalsonsposse@gmail.com

					INSTAGRAM:
					@nocturnalsonsposse

					<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/382477622&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
				</div>
			</div>
		);
	}
}

