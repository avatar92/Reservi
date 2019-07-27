import React, {Component} from 'react';
import NavBar from '../navBar';
import Footer from '../footer';
import {connect} from 'react-redux'




class SallePlus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <NavBar/>
                
                <div className="salle_imgs">
                
                </div>
                
                
                
                <Footer/>
            </div>
          );
    }
}

 
export default SallePlus;