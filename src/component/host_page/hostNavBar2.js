import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './hostNavBar2.css';
import { connect } from 'react-redux';

class HostNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    openNav = () => {
        document.getElementById("myNav").style.height = "100%";
    }

    closeNav = () => {
        document.getElementById("myNav").style.height = "0%";
    }

    scrollToFooter = () => {
        document.getElementById('footerContainer').scrollIntoView();
    }
    render() {
        return (
            <div className="barredenavgation">
                <div className="header">
                    <Link to='/admin' className='reservi'>Reservi.TN</Link>
                    <div className="toggleIcon">
                        <i className="fa fa-bars toggle" onClick={this.openNav} aria-hidden="true"></i>
                    </div>
                    <div id="myNav" className="overlay">
                        <span className='reservi1'>Reservi.TN</span>
                        <i className="fa fa-times closebtn" onClick={this.closeNav}></i>
                        <div className="overlay-content">
                            <Link className='colorWhite' to={window.location.href.slice(21)} onClick={this.scrollToFooter}>Contact us</Link>
                            <hr />
                            <div className="disabled">Navigation</div>
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
                                    <Link to='/salle_fete'>Salle des Fétes</Link>
                                    <Link to='/salle_ésthétique'>Salle d'ésthétique</Link>
                                    <Link to='/'>Restaurant</Link>
                                    <Link to='/'>Fast Food</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={window.location.href.slice(21)} className="specialcolor" onClick={this.scrollToFooter}>Contact Us</Link>
                        </li>
                        <li>
                            <Link to={'/messages'} className=" hostNavBar-message mr-3"><i className="fas fa-envelope fa-2x"></i></Link>

                        </li>
                        <li>
                            <div className='host-image-div'>
                                <img className='host-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png' alt='user' />
                                <div className="hostNavBar-sideBar">
                                    <div className="hostNavBar-user-information">
                                        <div >
                                            <div><b>{this.props.user[0].fullName}, Id: {this.props.user[0]._id}</b>
                                            </div>
                                            <div>{this.props.user[0].email}</div>
                                        </div>
                                    </div>
                                    <div className="hostNavBar-tasks">
                                        <Link className='hostNavBar-link' to={'/profile'}>
                                            <div> <i className="fas fa-user mr-2"></i>Mon profil </div>

                                        </Link>
                                        <Link className='hostNavBar-link' to={'/new_Salle'}>
                                            <div> <i className="fas fa-folder-plus  mr-2"></i>Ajouter salle </div>

                                        </Link>
                                        <Link className='hostNavBar-link' to={'/mes_salles'}>
                                            <div> <i className="fas fa-shopping-basket mr-2"></i>Mes salles </div>

                                        </Link>
                                        <Link className='hostNavBar-link' to={'/host_page'}>
                                            <div><i className="fas fa-home mr-2"></i>Accueil</div>

                                        </Link>
                                        
                                        <Link className='hostNavBar-link' to={'/logout'}>
                                            <div><i className="fas fa-sign-out-alt mr-2"></i>Déconnexion</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.hostReducer
    }
}
export default connect(mapStateToProps, null)(HostNavBar);