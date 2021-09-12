import React, { Component } from 'react';

class AlertUser extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                <button onClick={() => this.props.buttonClick("devCodeCamp")}>
                    Click Me!
                </button>
            </div>
         );
    }
}
 
export default AlertUser;