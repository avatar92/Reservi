import React, { Component } from 'react';


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
                            <a href="#">About us</a>
                            <a href="#">Contact us</a>
                            <hr/>
                            <a href="#">Connection</a>
                            <hr/>
                            <a href="#" className="disabled">Navigation</a>
                            <a href="#" className="space">Salle de sports</a>
                            <a href="#">Salle des Fétes</a>
                            <a href="#">Salle d'ésthétique</a>
                            <a href="#">Restaurant</a>
                            <a href="#">Fast Food</a>
                        </div>
                    </div>
                    <ul className="navLinks">
                        <li>  
                            <div className="dropdown">
                                <a href="#" className="dropdownLink">Navigation</a>
                                <div className="dropdown-content">
                                    <a href="#">Salle de sports</a>
                                    <a href="#">Salle des Fétes</a>
                                    <a href="#">Salle d'ésthétique</a>
                                    <a href="#">Restaurant</a>
                                    <a href="#">Fast Food</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="specialcolor">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="specialcolor">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className="specialcolor">Connexion</a>
                        </li>
                        
                    </ul>
                </div>
            </div> 
        );
    }
} 
export default NavBar;