import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from './nsplogo.jpeg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu' id='Menu'>
      	<img src= {Logo}></img>
        <Link to='/'>Home</Link>  <Link to='/about'>Clothing</Link>  <Link to='/Cart'>Cart</Link>
        <hr />
      </div>
    );
  }
}
