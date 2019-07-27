import React, { Component } from 'react';
import HostNavBar from './hostNavBar';
class HostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <HostNavBar/>
            </div>
         );
    }
}
 
export default HostPage;