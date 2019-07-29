import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './homepage/homePage.js';
import SalleEsthetique from './salle_ésthétique/salleesthetique.js';
import SalleFete from './salleFetes/salle-fete.js';
import SalleSport from './salle_sport/sallesport';
import AdminPage from './admin_page/adminDashboardPage'
import AdmintPostPage from './admin_page/adminPostsPage.js'
import AdminAddSallePage from './admin_page/adminAddSallePage.js'
import HostPage from './host_page/host.js'
import HostInformation from './host_page/hostInformation.js'
import NewHostSalle from './host_page/new-salle-host.js'
import SallePage from './salle_page/sallePage.js'
import HostSalleList from './host_page/host-salle-list'
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>    
            

            <Route exact path='/salle_fete' component={SalleFete}/>
            <Route exact path='/host_page' component={HostPage}/>
            <Route exact path='/profile' component={HostInformation}/>
            <Route exact path='/new_Salle' component={NewHostSalle}/>
            <Route exact path='/mes_salles' component={HostSalleList}/>


            <Route exact path='/' component={HomePage} />
            <Route exact path='/salle_ésthétique' component={SalleEsthetique}/>
            <Route exact path='/salle_de_sports' component = {SalleSport}/>
            <Route exact path='/admin' component={AdminPage}/>

            <Route exact path='/admin/post' component={AdmintPostPage}/>
            <Route exact path='/admin/add_salle' component={AdminAddSallePage}/>
            <Route exact path='/admin/post' component={AdmintPostPage}/>
            <Route exact path='/admin/add_salle' component={AdminAddSallePage}/>
            <Route exact path='/salle/:_id' render={(props)=><SallePage _id={props.match.params._id}/>}/>

        </div>
        );
    }
}
 
export default Router;