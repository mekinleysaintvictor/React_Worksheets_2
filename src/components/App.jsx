import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';

class App extends Component {
    constructor(props) {
        super(props);
        this.names = [
            'Thomas', 'Sarah', 'Lindia', 'Jennifer', 'Akeem'
        ];

        this.state = { 
            firstName: 'Reggie',
            lastName: 'White'
         }
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <DisplayName firstName= {this.state.firstName} lastName= {this.state.lastName} />
            </div>
         );
    }
}
 

export default App;
