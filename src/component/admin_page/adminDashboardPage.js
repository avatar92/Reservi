import React, { Component } from 'react';
import AdminSideNav from './AdminSideNavBar.js'
import AdminNavBar from './AdminNavBar.js'
import DashboardContent from './dashboardContent.js'
// import {Link} from 'react-router-dom'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    openCloseSideNav=(x)=> {
        if (x===false)
        {
            document.getElementById("Sidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        else if (x===true){
            document.getElementById("Sidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
        }
    }
    render() {
        return ( 
            <div>
                <AdminSideNav/>
                <div id='main'>
                    <AdminNavBar openClose={(x)=>this.openCloseSideNav(x)}/>
                    <DashboardContent/>
                    {/* <Link to='/' >click me</Link> */}
                </div>
            </div>
        );
    }
}
 
export default AdminPage;
