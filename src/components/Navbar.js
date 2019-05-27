import React from 'react';

function Navbar(props) {
  const { currentScore, topScore } = props;
  return (
    <nav className="navbar navbar-dark bg-secondary sticky-top w-100 text-justify-left text-light">
        <ul className="navbar-nav">
          <li className="nav-item text-align-left">
            <p>React: The Gathering</p>
          </li>
          <li className="text-justify-right">
            <p>Current Score: {currentScore}</p>
            <p>Top Score: {topScore}</p>
          </li>  
        </ul>
    </nav>
  )
}



export default Navbar;