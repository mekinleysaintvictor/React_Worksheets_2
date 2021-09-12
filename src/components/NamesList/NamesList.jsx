import React from 'react';

const NamesList = (props) => {
    const names = props.names;
    const listNames = names.map((name) => 
    <li>{name}</li>
    );
    return ( 
        <span>
            <ul>
                {listNames}
            </ul>
        </span>
     );
}
 
export default NamesList;