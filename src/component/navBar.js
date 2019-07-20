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
    scrollToContacts=()=>{
        document.getElementById('devsContainer').scrollIntoView(); 
    }
    scrollToFooter=()=>{
        document.getElementById('footerContainer').scrollIntoView(); 
    }
    render() { 
        return ( 
            <div className="barredenavgation">
            <div className="header">
                    <span className='reservi'>Reservi.TN</span>
                    <div  className="toggleIcon">
                        <i className="fa fa-bars toggle" onClick={this.openNav} aria-hidden="true"></i>
                    </div>
                    <div id="myNav" className="overlay">
                    <span className='reservi1'>Reservi.TN</span>
                        <i className="fa fa-times closebtn" onClick={this.closeNav}></i>
                        <div className="overlay-content">
                            <Link to='/'>About us</Link>
                            <Link className='colorWhite'>Contact us</Link>
                            <hr/>
                            <Link to='/connection'>Connection</Link>
                            <hr/>
                            <Link className="disabled">Navigation</Link>
                            <Link to='/salle_de_sports' className="space">Salle de sports</Link>
                            <Link to='/salle_des_Fétes'>Salle des Fétes</Link>
                            <Link to='/salle_ésthétique'>Salle d'ésthétique</Link>
                            <Link to='/'>Restaurant</Link>
                            <Link to='/'>Fast Food</Link>
                        </div>
                    </div>
                    <ul className="navLinks">
                        <li>  
                            <div className="dropdown">
                                <span className="dropdownLink">Navigation</span>
                                <div className="dropdown-content">
                                    <Link to='/salle_de_sports'>Salle de sports</Link>
                                    <Link to='/salle_des_Fétes'>Salle des Fétes</Link>
                                    <Link to='/salle_ésthétique'>Salle d'ésthétique</Link>
                                    <Link to='/'>Restaurant</Link>
                                    <Link to='/'>Fast Food</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/" className="specialcolor" onClick={this.scrollToContacts}>About Us</Link>
                        </li>
                        <li>
                            <Link to='/' className="specialcolor" onClick={this.scrollToFooter}>Contact Us</Link>
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