import React, { Component } from 'react';
import NavBar from '../navBar.js'
import IntroductionSection from './introductionSection.js'
import CardSection from './cardsection'
import Footer from '../footer.js'
import Devs from './devs.js'
import Introduction from './introduction.js'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <Introduction/>
                <CardSection/>
                <Devs/>
                <Footer/>
            </div>        
        );
    }
}
 
export default HomePage;