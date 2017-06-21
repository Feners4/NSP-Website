import React, { Component } from 'react';
import arrow from './001-back.png';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <img id='leftarrow' src= { arrow }></img>
    </div>
  );
}

export default LeftArrow;

