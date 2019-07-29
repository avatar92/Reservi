import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import HomePage from './homepage/homePage.js'
import SalleEsthetique from './salle_ésthétique/salleesthetique.js';
import SalleSport from './salle_sport/sallesport';
import AdminPage from './admin_page/adminPage';
import Uploading from './asma.js';
import AboutUs from './About_us/AboutUs.js';
import SallePlus from '../component/salle_sport/salleplus'


class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>    
            <Route exact path='/' component={HomePage} />
            <Route exact path='/salle_ésthétique' component={SalleEsthetique}/>
            <Route exact path='/salle_de_sports' component = {SalleSport}/>
            <Route exact path='/admin' component={AdminPage}/>
            <Route exact path='/img' component={Uploading}/>
            <Route exact path='/about_us' component={AboutUs}/>
            <Route exact path='/salle_de_sports/:_id' component={SallePlus}/>
        </div>
        );
    }
}
 
export default Router;