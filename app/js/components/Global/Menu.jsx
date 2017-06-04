import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from './nspstar.png';
import HomeLogo from './HOME.png';
import MusicLogo from './MUSIC.png';
import AboutLogo from './ABOUT.png';
import ContactLogo from './CONTACT.png';
import ShopLogo from './SHOP.png';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu' id='Menu'>
        <Link to='/'><img src={ HomeLogo }></img></Link> <Link to='/About'><img src={ AboutLogo }></img></Link> <img src= {Logo}></img> <Link to='/Shop'><img src={ ShopLogo }></img></Link>  <Link to='/Cart'><img src={ ContactLogo }></img></Link>
        <hr />
      </div>
    );
  }
}
