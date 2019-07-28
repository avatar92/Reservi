import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './AdminSideNavBar.css'
class AdminSideNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSideBarOpen:false
        }
    }
    
    render() { 
        return ( 
            <div>
                <div id="Sidenav" className="sidenav">
                    <Link className='sideNavLink' to='/'><i class="fa fa-home flexinner" aria-hidden="true"></i><span className='flexinner'>Home</span></Link>
                    <Link className='sideNavLink' to="/admin"> <i className="fa fa-dashboard admintoggle flexinner"aria-hidden="true"></i><span className='flexinner'>Dashboard</span></Link>
                    <Link className='sideNavLink' to="/admin/post"><i class="fa fa-comment flexinner"></i><span className='flexinner'>Posts</span></Link>
                    <Link className='sideNavLink' to="/admin/add_salle"><i class="fa fa-plus-square flexinner"></i><span className='flexinner'>Add Salle</span></Link>
                    <Link className='sideNavLink' href="/admin/Feature"><i class="fa fa-trophy flexinner"></i><span className='flexinner'>new Feature</span></Link>
                    <div className='adminPage'>Admin Page</div>
                </div>
                
            </div>
        );
    }
}
 
export default AdminSideNav;