import React, { Component } from 'react';
import HostNavBar from './hostNavBar2';
import Footer from '../footer.js';
import CardSection from '../homepage/cardsection'

class HostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div style={{minHeight:'100px'}}></div>
                <HostNavBar/>
                <CardSection/>
               
                <Footer/>
                
            </div>
         );
    }
}
 
export default HostPage;