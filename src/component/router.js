import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import HomePage from './homepage/homePage.js'
import SalleEsthetique from './salle_ésthétique/salleesthetique.js';
import SalleFete from './salleFetes/salle-fete-item'
import NewSalle from './salleFetes/newSalle.js'

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
            <Route exact path='/asma' component={SalleFete}/>
            <Route exact path='/newSalle' component={NewSalle}/>


        </div>
        );
    }
}
 
export default Router;