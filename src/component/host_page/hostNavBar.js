class HostNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <div className="mobile">
                    <label className="mdi mdi-menu" htmlFor="mobile-header-nav-toggle" />
                    <input id="mobile-header-nav-toggle" type="checkbox" />
                    <div id="mobile-header-nav-section" className="mobile-header-nav mobile"><div className="mobile-header-nav-section"><div className="mobile-header-nav-item"><a href="https://www.takiacademy.com"> Accueil </a></div> <div className="mobile-header-nav-item"><a href="https://www.takiacademy.com/subjects"> Cours </a></div> <div className="mobile-header-nav-item"><a href="https://www.takiacademy.com/codes/create"> Achat des points </a></div> <div className="mobile-header-nav-item"><a href="https://www.takiacademy.com/offers"> Les Offres </a></div> <div className="mobile-header-nav-item"><a href="https://www.takiacademy.com/events"> Séances en direct </a></div> <div className="mobile-header-nav-item" /></div> <div className="mobile-header-nav-section"><div className="mobile-header-nav-item"><a href="https://www.takiacademy.com/subjects/109-maths/chapters">Maths</a></div><div className="mobile-header-nav-item"><a href="https://www.takiacademy.com/subjects/120-maths/chapters">Maths</a></div><div className="mobile-header-nav-item"><a href="https://www.takiacademy.com/subjects/131-maths/chapters">Maths</a></div> <div className="mobile-header-nav-item">Voir plus... </div></div> <div className="mobile-header-nav-section"><a href="https://www.youtube.com/watch?v=6C3Xmez4ank&list=PLUDUTmpExkvL6e4hMnBRcg0Bx64AR9z-C" target="_blank" className="mobile-header-nav-item">
                        Aide
                  </a> <div className="mobile-header-nav-item">Vos suggestions</div> <div className="mobile-header-nav-item">Score Baccalauréat</div></div></div>
                </div>
                <div className="main-corner">
                    <i className="mdi mdi-menu menu-switcher" id="main-sidebar-switcher" />
                    <a className="header-appname" href="https://www.takiacademy.com/home">
                        <img className="desktop" src="https://www.takiacademy.com/img/logo.png" />
                        <img className="mobile" src="https://www.takiacademy.com/img/logo.png" />TakiAcademy</a>
                </div>
                <div className="search-box desktop">
                    <form method="GET" action="https://www.takiacademy.com/search" acceptCharset="UTF-8" id="searchform">
                        <input placeholder="Rechercher" id="searchform-keyword" autoComplete="off" name="keyword" type="text" className="ui-autocomplete-input" />
                        <div className="search-spinner">
                            <i className="mdi mdi-loading mdi-spin" />
                        </div>
                        <div className="search-box-submit" id="search-box-submit">
                            <i className="mdi mdi-magnify" />
                        </div>
                    </form>
                    <div className="searchform-errors-container"><span className="searchform-errors">Tapez au minimum 3 caractères</span></div>
                </div>
                <div className="header-icons mobile">
                    <a href="https://www.takiacademy.com/messages" className="mdi mdi-email icon" style={{ height: '20px' }}>
                        <div className="icon-count badge-animate-mobile">7</div>
                    </a>
                    <label className="mdi mdi-magnify" htmlFor="mobile-header-search-toggle" />
                    <label className="mdi mdi-account-circle" htmlFor="mobile-header-menu-toggle" />
                    <input id="mobile-header-menu-toggle" type="checkbox" />
                    <div className="mobile-header-menu mobile">
                        <div className="mobile-header-menu-section drodownmobile">
                            <div className="mobile-header-menu-item">
                                <span style={{ fontWeight: 700, fontSize: '16px' }}>SKANDER ELOUADI, id: 65549</span><br />
                                <span>skanderelouadi58@gmail.com</span><br />
                                <span>Abonnements :</span><br />
                            </div>
                        </div>
                        <div className="mobile-header-menu-section">
                            <a href="https://www.takiacademy.com/profile">
                                <div className="mobile-header-menu-item"> <i className="mdi mdi-account" /> Mon profil </div>
                            </a>
                            <a href="https://www.takiacademy.com/profile/purchase-history">
                                <div className="mobile-header-menu-item"> <i className="mdi mdi-basket" /> Mes offres </div>
                            </a>
                            <a href="https://www.takiacademy.com/codes">
                                <div className="mobile-header-menu-item"> <i className="mdi mdi-wallet" /> Mes points </div>
                            </a>
                            <a href="https://www.takiacademy.com/transferPoints">
                                <div className="mobile-header-menu-item"> <i className="mdi mdi-swap-horizontal-bold" /> Transfert des points </div>
                            </a>
                            <a href="https://www.takiacademy.com/api/bookmarks">
                                <div className="mobile-header-menu-item"> <i className="mdi mdi-bookmark" />Liste de favoris</div>
                            </a>
                        </div>
                        <div className="mobile-header-menu-section">
                            <a href="https://www.takiacademy.com/logout">
                                <div className="mobile-header-menu-item"> <i className="mdi mdi-logout" /> Déconnexion </div>
                            </a>
                        </div>
                    </div>
                </div>
                <input id="mobile-header-search-toggle" type="checkbox" />
                <div className="mobile-header-search mobile">
                    <form method="GET" action="https://www.takiacademy.com/search" acceptCharset="UTF-8" id="searchformmobile">
                        <input placeholder="Rechercher" id="searchform-keyword-mobile" name="keyword" type="text" />
                        <div className="mobile-search-icons search-box-submit-mobile" id="search-box-submit-mobile">
                            <i className="mdi mdi-magnify mobile-search-icon" id="search-box-submit-mobile-icon" />
                            <label className="mdi mdi-close mobile-search-icon" htmlFor="mobile-header-search-toggle" />
                        </div>
                    </form>
                    <div className="searchform-errors-container"><span className="searchform-errors">Tapez au minimum 3 caractères</span></div>
                </div>
                <div className="header-icons desktop">
                    <a href="https://www.takiacademy.com/messages" className="mdi mdi-email icon">
                        <div className="icon-count badge-animate">7</div>
                    </a>
                    <div className="header-user-corner">
                        <img src="https://lh4.googleusercontent.com/-PBWsOW2io10/AAAAAAAAAAI/AAAAAAAAAAk/bxkYXWKSnoU/photo.jpg" alt="avatar" className="header-avatar" />
                        <div className="user-corner-card">
                            <div className="user-corner-card-header">
                                <div className="user-corner-card-header-text">
                                    <div className="user-corner-card-title"><b>SKANDER ELOUADI , Id:
                          65549</b> </div>
                                    <div className="user-corner-card-subtitle">skanderelouadi58@gmail.com</div>
                                    <div className="user-corner-card-subtitle">58 881 053</div>
                                </div>
                            </div>
                            <div className="user-corner-card-content">
                                <a className="user-corner-card-item" href="https://www.takiacademy.com/profile">
                                    <div className="user-corner-card-item-icon mdi mdi-account" />
                                    <div className="user-corner-card-item-text">Mon profil </div>
                                </a>
                                <a className="user-corner-card-item" href="https://www.takiacademy.com/profile/purchase-history">
                                    <div className="user-corner-card-item-icon mdi mdi-basket" />
                                    <div className="user-corner-card-item-text">Mes offres </div>
                                </a>
                                <a className="user-corner-card-item" href="https://www.takiacademy.com/codes">
                                    <div className="user-corner-card-item-icon mdi mdi-wallet" />
                                    <div className="user-corner-card-item-text">Mes points </div>
                                </a>
                                <a className="user-corner-card-item" href="https://www.takiacademy.com/transferPoints">
                                    <div className="user-corner-card-item-icon mdi mdi-swap-horizontal-bold" />
                                    <div className="user-corner-card-item-text">Transfert des points </div>
                                </a>
                                <a className="user-corner-card-item" href="https://www.takiacademy.com/api/bookmarks">
                                    <div className="user-corner-card-item-icon mdi mdi-bookmark" />
                                    <div className="user-corner-card-item-text">Liste de favoris</div>
                                </a>
                                <a className="user-corner-card-item" href="https://www.takiacademy.com/logout">
                                    <div className="user-corner-card-item-icon mdi mdi-logout" />
                                    <div className="user-corner-card-item-text">Déconnexion</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-header-layers-close" />
            </header>
        );
    }
}

export default HostNavBar;