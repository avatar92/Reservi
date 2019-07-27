import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './homepage/homePage.js';
import SalleEsthetique from './salle_ésthétique/salleesthetique.js';
import SalleFete from './salleFetes/salle-fete.js';
import NewSalle from './salleFetes/newSalle.js';
import SalleSport from './salle_sport/sallesport';
import AdminPage from './admin_page/adminPage';
import HostPage from './host_page/host';

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

            <Route exact path='/salle_fete' component={SalleFete}/>
            <Route exact path='/newSalle' component={NewSalle}/>
            <Route exact path='/hostPage' component={HostPage}/>


            <Route exact path='/salle_de_sports' component = {SalleSport}/>
            <Route exact path='/admin' component={AdminPage}/>

        </div>
        );
    }
}
 
export default Router;