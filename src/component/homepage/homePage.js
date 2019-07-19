import React, { Component } from 'react';
import NavBar from '../navBar.js'
import IntroductionSection from './introductionSection.js'
import CardSection from './cardsection'
import Footer from '../footer.js'
import Devs from './devs.js'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <IntroductionSection/>
                <CardSection/>
                <Devs/>
                <Footer/>
            </div>        
        );
    }
}
 
export default HomePage;