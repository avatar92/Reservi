import React, { Component } from 'react';
import HostNavBar from './hostNavBar';
import Typing from 'react-typing-animation';
import Footer from '../footer.js';

class HostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <HostNavBar/>
               
                <Footer/>
                
            </div>
         );
    }
}
 
export default HostPage;