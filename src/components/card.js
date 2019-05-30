import React from 'react';


function Card(props) {
  const { handleClick, id } = props
  return (
    <div className="card" style={imgStyle} value={id}>
      {/* {console.log(id)} */}
      <div className="img-container">
        <img 
        onClick={() => handleClick(id)}
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