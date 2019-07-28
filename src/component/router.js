import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './homepage/homePage.js';
import SalleEsthetique from './salle_ésthétique/salleesthetique.js';
import SalleFete from './salleFetes/salle-fete.js';
import NewSalle from './salleFetes/newSalle.js';
import SalleSport from './salle_sport/sallesport';
import AdminPage from './admin_page/adminDashboardPage'
import AdmintPostPage from './admin_page/adminPostsPage.js'
import AdminAddSallePage from './admin_page/adminAddSallePage.js'
import HostPage from './host_page/host';
import SallePage from './salle_page/sallePage.js'

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>    
            

            <Route exact path='/salle_fete' component={SalleFete}/>
            <Route exact path='/newSalle' component={NewSalle}/>
            <Route exact path='/hostPage' component={HostPage}/>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/salle_ésthétique' component={SalleEsthetique}/>
            <Route exact path='/salle_de_sports' component = {SalleSport}/>
            <Route exact path='/admin' component={AdminPage}/>
            <Route exact path='/admin/post' component={AdmintPostPage}/>
            <Route exact path='/admin/add_salle' component={AdminAddSallePage}/>
            <Route exact path='/salle/:_id' render={(props)=><SallePage _id={props.match.params._id}/>}/>

        </div>
        );
    }
}
 
export default Router;