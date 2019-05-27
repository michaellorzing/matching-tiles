import React from 'react';


function Card(props) {
  const { handleClick } = props
  return (
    <div className="card" style={imgStyle}>
      <div className="img-container">
        <img 
        onClick={handleClick}
        alt={props.name} 
        src={props.image} />
      </div>
    </div>
  );
}

const imgStyle ={
  padding: 0
}
export default Card;