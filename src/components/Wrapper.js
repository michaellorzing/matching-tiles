import React from 'react';

function Wrapper(props) {
  return <div
    className="wrapper row">
    <div className='col-md-1 float-left'>
      {props.children}
    </div>
  </div>;
}

export default Wrapper;