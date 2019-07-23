import React, {Component} from 'react';
import NavBar from '../navBar';
import Footer from '../footer';
import TopSection from './topsection';
import SalleList from './salle_sport_list'
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
            <SalleList/>
            <Footer/>

        </div>


         );
    }
}
 
export default SalleSport;