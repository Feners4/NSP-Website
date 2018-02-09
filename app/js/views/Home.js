import React, { Component } from 'react';
import { Link } from 'react-router';

import Jag from './jag.jpg';
import Jag2 from './jag2.jpg';
import Logo from './nsplogo.jpeg';

var Music = React.createClass({
		render: function() {
			return (
				<div>
					<h2> BBB </h2>
				</div>
			);

		}
	});

export default class Home extends  Component {
	soundCloud() {
		var SC = require('soundcloud');

		SC.initialize({
  			client_id: 'YOUR_CLIENT_ID',
  			redirect_uri: 'http://example.com/callback'
		});
	}

	constructor(){
    super();
      this.state = {
      }
  }

	componentDidMount () {
  	window.scrollTo(0, 0)
	}


  	render() {
    	return (
      		<div className='Home' id='Home'>
          <div id='homecontentwrapper'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fZWVDVFWqhQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jM4AUASlD4A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Xk0DsDTSp4w" frameborder="0" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZMVmc1iH5xQ" frameborder="0" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ArAm8uZwwNY" frameBorder="0" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XfZoOna9ZOg" frameBorder="0" allowFullScreen></iframe>
          </div>     
      		</div>
    	);
  	}
}
