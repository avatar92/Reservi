import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './navBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    openNav=()=> {
        document.getElementById("myNav").style.height = "100%";
      }
      
    closeNav=()=> {
        document.getElementById("myNav").style.height = "0%";
    }
    render() { 
        return ( 
            <div className="barredenavgation">
            <div className="header">
                    <span className='reservi'>Reservi.TN</span>
                    <div  className="toggleIcon">
                        <a className="fa fa-bars toggle" onClick={this.openNav} aria-hidden="true"></a>
                    </div>
                    <div id="myNav" className="overlay">
                    <span className='reservi1'>Reservi.TN</span>
                        <a className="fa fa-times closebtn" onClick={this.closeNav}></a>
                        <div className="overlay-content">
                            <Link to='/'><a>About us</a></Link>
                            <a>Contact us</a>
                            <hr/>
                            <Link to='/connection'><a>Connection</a></Link>
                            <hr/>
                            <a className="disabled">Navigation</a>
                            <Link to='/salle_de_sports'><a className="space">Salle de sports</a></Link>
                            <Link to='/salle_des_Fétes'><a>Salle des Fétes</a></Link>
                            <Link to='/salle_ésthétique'><a>Salle d'ésthétique</a></Link>
                            <Link to='/'><a>Restaurant</a></Link>
                            <Link to='/'><a>Fast Food</a></Link>
                        </div>
                    </div>
                    <ul className="navLinks">
                        <li>  
                            <div className="dropdown">
                                <a className="dropdownLink">Navigation</a>
                                <div className="dropdown-content">
                                    <Link to='/salle_de_sports'><a>Salle de sports</a></Link>
                                    <Link to='/salle_des_Fétes'><a>Salle des Fétes</a></Link>
                                    <Link to='/salle_ésthétique'><a>Salle d'ésthétique</a></Link>
                                    <Link to='/'><a>Restaurant</a></Link>
                                    <Link to='/'><a>Fast Food</a></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/" className="specialcolor">About Us</Link>
                        </li>
                        <li>
                            <Link to='/' className="specialcolor">Contact Us</Link>
                        </li>
                        <li>
                            <Link to='/' className="specialcolor">Connexion</Link>
                        </li>
                        
                    </ul>
                </div>
            </div> 
        );
    }
} 
export default NavBar;