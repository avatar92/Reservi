import React, { Component } from 'react';
import NavBar from '../navBar.js'
import SalleDescription from './salleDescription.js'
import Footer from '../footer.js'

class SallePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
        <div>
            <NavBar/>
            <SalleDescription _id={this.props._id}/>
            <Footer/>
        </div>
        );
    }
}
 
export default SallePage;
