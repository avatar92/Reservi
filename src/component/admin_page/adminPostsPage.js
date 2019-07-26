import React, { Component } from 'react';
import AdminSideNav from './AdminSideNavBar.js'
import AdminNavBar from './AdminNavBar.js'
import HostPost from './hostPost.js'
import AdminPostSearchBar from './adminPostSearchBar.js'
class AdminPostPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            adminSearch:''
        }
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
                    <AdminPostSearchBar adminSearch={(x)=>this.setState({adminSearch:x})}/>
                    <HostPost searchValue={this.state.adminSearch}/>           
                </div>
            </div>
        );
    }
}
 
export default AdminPostPage;