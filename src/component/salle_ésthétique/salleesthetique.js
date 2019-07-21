import React, { Component } from 'react';
import NavBar from '../navBar.js'
import Footer from '../footer.js'
import Devs from '../homepage/devs.js'
import SalleList from './salleList.js'

class SalleEsthetique extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <SalleList/>
                <Devs/>
                <Footer/>
            </div>
        );
    }
}
 
export default SalleEsthetique;

