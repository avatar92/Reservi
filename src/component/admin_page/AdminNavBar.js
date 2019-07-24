import React, { Component } from 'react';
import './AdminNavBar.css'
class AdminNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen:false }
    }
    render() { 
        return ( 
            <div className="adminNavgationContainer container-fluid">
                <div className="adminnavigationMenu">
                        <span className='adminTogler ' >
                            <i onClick={()=>{
                                    this.setState({isOpen:!this.state.isOpen})
                                    this.props.openClose(this.state.isOpen)}} className="fa fa-bars admintoggle"aria-hidden="true"></i>
                        </span>
                        <div className='navbarRight '>
                        <div className="navigationLinks ">
                                <i class="fa fa-paper-plane  "></i>
                                <i class="fa fa-bell "></i>
                        </div>
                        <div className='admin'>                                
                            <span><img className='adminProfile ' src='https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/60413678_2173093146102564_8862264565430222848_n.jpg?_nc_cat=108&_nc_oc=AQmS1Up_nwdXzefEOvNWl6mZQssESWsi75MOaDbNZjkfPYYqnKg1vSVaFd8D8f1BWlc&_nc_ht=scontent.ftun12-1.fna&oh=8043400c3a62efd655d676320f09902a&oe=5DBA0206' alt='admin'></img> Adel Ben Salem</span>
                            <span className='logOut '>Log Out</span>
                        </div>
                        </div>
                </div>
            </div>
        );
    }
}
 
export default AdminNavBar;