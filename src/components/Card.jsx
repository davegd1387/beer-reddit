import React from 'react';
import './Card.css';

const Card = (props) => {
  // return <div className={`card ${props.className}`}>card {props.className}</div>;
  return <div className="card">{props.children}</div>;
  // return <div className={`card ${props.className}`}>{props.children}</div>;

};

export default Card;
