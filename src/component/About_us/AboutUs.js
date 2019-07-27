import React, {Component} from 'react';
import NavBar from '../navBar';
import Footer from '../footer';
import Team from './Team.js';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <NavBar/>
                <Team/>
                <Footer/>
            </div>
         );
    }
}



export default AboutUs;