import React from 'react';

function Navbar(props) {
  const { currentScore, topScore } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top w-100 text-justify-left" style={navStyle}>
    <span className="navbar-brand" style={navStyle}>React: The Gathering</span>
      <ul className="navbar-nav text-justify-right">
        <li className="nav-item">
          <span>Current Score: {currentScore} </span>
        </li>
        <li className="nav-item">
          <span> High Score: {topScore} </span>
        </li>
      </ul>
     </nav> 
  )
}


const navStyle = {
  color: 'white'
}


export default Navbar;