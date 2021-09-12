import React from 'react';

const DisplayName = (props) => {
    return ( 
        <span>
            <h1> {props.firstName} {props.lastName} </h1>
        </span>
     );
}
 
export default DisplayName;