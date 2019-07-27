import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './hostNavBar.css'
class HostNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMyComponent: false
        }
        this.searchForMobile = this.searchForMobile.bind(this);
    }
    searchForMobile() {

        this.setState({ showMyComponent: !this.state.showMyComponent })

    }
    render() {
        return (
            <nav>
                <div className='align-items-center hostNavBar' style={this.state.showMyComponent ? { display: 'none' } : {display: 'flex'}  }>
                    <div className='hostNavBar-reservi'>
                        <span>Reservi.TN</span>
                    </div>
                    <div className='hostNavBar-search'>
                        <form className="d-flex justify-content-center">
                            <input className="form-control mr-sm-2 hostNavBar-search" type="search" placeholder="Rechercher" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0 hostNavBar-btn-search" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className='d-flex justify-content-center align-items-center hostNavBar-msg-profil'>
                        <Link to={'/messages'} className=" hostNavBar-message  mr-3"><i className="fas fa-envelope fa-2x"></i></Link>
                        <span className="hostNavBar-msg-profil-search mr-3" onClick={this.searchForMobile}><i className="fas fa-search"></i></span>
                        <div className='host-image-div'>
                            <img className='host-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png' />
                            <div className="hostNavBar-sideBar">
                                <div className="hostNavBar-user-information">
                                    <div >
                                        <div className="user-corner-card-title"><b>SKANDER ELOUADI , Id:
                                    65549</b>
                                        </div>
                                        <div className="user-corner-card-subtitle">skanderelouadi58@gmail.com</div>
                                        <div className="user-corner-card-subtitle">58 881 053</div>
                                    </div>
                                </div>
                                <div className="hostNavBar-tasks">
                                    <Link className='hostNavBar-link' to={'/profile'}>
                                        <div> <i className="fas fa-user mr-2"></i>Mon profil </div>

                                    </Link>
                                    <Link className='hostNavBar-link' to={'/newSalle'}>
                                        <div> <i className="fas fa-user mr-2"></i>Ajouter salle </div>

                                    </Link>
                                    <Link className='hostNavBar-link' to={'/mesSalles'}>
                                        <div> <i class="fas fa-folder-open mr-2"></i> Mes salles </div>

                                    </Link>
                                    <Link className='hostNavBar-link' to={'/logout'}>
                                        <div><i class="fas fa-sign-out-alt mr-2"></i>Déconnexion</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-items-center hostNavBar' style={this.state.showMyComponent ? {display: 'flex'} : {display: 'none'}  }>
                <div className='hostNavBar-reservi-forMobile'>
                        <span>Reservi.TN</span>
                    </div>
                    <div className='hostNavBar-search-forMobile'>
                        <form className="d-flex justify-content-center align-items-center input-group-sm">
                            <input className="form-control mr-sm-2 " type="search" placeholder="Rechercher" aria-label="Search " />
                            <button className="btn btn-outline-light btn-sm my-2 my-sm-0 hostNavBar-btn-search" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <span className="hostNavBar-msg-profil-search-formobile ml-3" onClick={this.searchForMobile}><i class="fas fa-times"></i></span>

                </div>
            </nav>

        );
    }
}
{/* //style={this.state.showMyComponent ? {} : { display: 'none' }} */ }
export default HostNavBar;