import React from 'react';


function Card(props) {
  return (
    <div
      className="card"
      id="click-item">
      <div className="img-container">
        <img 
        alt={props.name} 
        src={props.image} />
      </div>
    </div>
  );
}


export default Card;