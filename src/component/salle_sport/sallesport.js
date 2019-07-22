import React, {Component} from 'react';
import NavBar from '../navBar';
import Footer from '../footer';
import TopSection from './topsection';
import './sallesport.css'
class SalleSport extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>

            <NavBar/>
            <TopSection/>
            <Footer/>

        </div>


         );
    }
}
 
export default SalleSport;