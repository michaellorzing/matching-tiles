import React from 'react';



function Wrapper(props) {
 return <div style={wrapperStyle}>
   {props.children}
 </div>;
}


const wrapperStyle = {
 display: 'flex',
 flexDirecton: 'row',
 flexWrap: 'wrap',
 padding: '20px',
 border: '1px solid grey',
 justifyContent: 'center'
}


export default Wrapper;