import React, { Component } from 'react';
import arrow from './002-next.png';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <img id='rightarrow' src= { arrow }></img>
    </div>
  );
}

export default RightArrow;

