import React, { Component } from 'react';
import HostNavBar from './hostNavBar2.js';
import './new-salle-host.css'
class NewHostSalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSalleFete: false,
            showSalleSportEsthetique:false,
            category:'',
            titre: '',
            description: '',
            adresse: '',
            ville: '',
            telFixe: '',
            telMobile: '',
            capacite: '',
            prixSalle: ''
        }
    }
    handleCategory(e){
        this.setState({category:e.target.value})
        if(e.target.value !== 'Catégorie'){
            if(e.target.value === 'Salle des fêtes'){
                this.setState({showSalleFete:true})
                this.setState({showSalleSportEsthetique:false})

            }else{
                this.setState({showSalleFete:false})
                this.setState({showSalleSportEsthetique:true})

            }
        }
        
    }
    render() {
        console.log(this.state.ville)
        return (
            <div className="newsalle-host-main">
                <HostNavBar />
                <div className="newsalle-host">
                    <div className="newsalle-host-title">
                        Ajouter un nouveau contenu
                    </div>
                    <div>
                        <select className="form-control newsalle-host-dropdown" onChange={(e) => this.handleCategory(e)}>
                            <option>Catégorie</option>
                            <option>Salle des fêtes</option>
                            <option>Salle de sport</option>
                            <option>Salle d'esthétique</option>
                        </select>
                    </div>
                    <form>
                        <div className='newsalle-host-space'>
                            <div>Titre*</div>
                            <div>
                                <input className="input-border-style" type="text" placeholder="Titre" required onChange={(e) => { this.setState({ titre: e.target.value }) }} />
                            </div>
                        </div>

                        <div className='newsalle-host-space'>
                            <div>Description*</div>
                            <div>
                                <textarea className="textarea-border-style" placeholder="Description" required onChange={(e) => { this.setState({ description: e.target.value }) }}></textarea>
                            </div>
                        </div>
                        <div className='newsalle-host-space'>
                            <div>Adresse*</div>
                            <input className="input-border-style" type="text" placeholder="Adresse" required onChange={(e) => { this.setState({ adresse: e.target.value }) }} />
                        </div>
                        <div className="newsalle-host-section newsalle-host-space" >
                            <div>Ville*</div>
                            <select className="form-control newsalle-host-dropdown" id="ville" onChange={(e) => { this.setState({ ville: e.target.value }) }}>
                                <option>Gouvernorat</option>
                                <option>Ariana</option>
                                <option>Béja</option>
                                <option>Ben Arous</option>
                                <option>Bizerte</option>
                                <option>Gabès</option>
                                <option>Gafsa</option>
                                <option>Jendouba</option>
                                <option>Kairouan</option>
                                <option>Kasserine</option>
                                <option>Kébeli</option>
                                <option>Kef</option>
                                <option>Mahdia</option>
                                <option>Manouba</option>
                                <option>Médenine</option>
                                <option>Monastire</option>
                                <option>Nabeul</option>
                                <option>Sfax</option>
                                <option>Sidi Bouzid</option>
                                <option>Siliana</option>
                                <option>Sousse</option>
                                <option>Tataouine</option>
                                <option>Tozeur</option>
                                <option>Tunis</option>
                                <option>Zaghouan</option>
                            </select>
                        </div>
                        <div className='newsalle-host-space'>
                            <div>Image</div>
                            <input className="input-border-style" type="file" accept="image/*" multiple />
                        </div>
                        <div className='row newsalle-host-space'>
                            <div className='col-sm-6'>
                                <div>
                                    Téléphone Fixe*
                                </div>
                                <input className="input-border-style" type="text" placeholder="Fixe" required onChange={(e) => { this.setState({ telFix: e.target.value }) }} />

                            </div>
                            <div className='col-sm-6'>
                                <div>
                                    Téléphone mobile*
                                </div>
                                <input className="input-border-style" type="text" placeholder="Mobile" required onChange={(e) => { this.setState({ telMobile: e.target.value }) }} />
                            </div>
                        </div>
                        <div className='newsalle-host-salleFete newsalle-host-space' style={this.state.showSalleFete ? { display: 'block' } : { display: 'none' }}>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div>
                                        Capacité
                                    </div>
                                    <input className="input-border-style" type="text" placeholder="Capacité" required onChange={(e) => { this.setState({ capacite: e.target.value }) }} />

                                </div>
                                <div className='col-sm-6'>
                                    <div>
                                        Prix salle
                                    </div>
                                    <input className="input-border-style" type="text" placeholder="Prix" required onChange={(e) => { this.setState({ prix: e.target.value }) }} />

                                </div>
                            </div>
                        </div>
                        <div className='newsalle-host-sport-esthetique newsalle-host-space' style={this.state.showSalleSportEsthetique ? { display: 'block' } : { display: 'none' }}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>
                                        Nom offre
                                    </div>
                                    <input className="input-border-style" type="text" placeholder="Nom d'offre" required onChange={(e) => { this.setState({ nomOffre: e.target.value }) }} />

                                </div>
                                <div className="col-sm-6">
                                    <div>
                                        Prix offre
                                    </div>
                                    <input className="input-border-style" type="text" placeholder="Prix d'offre" required onChange={(e) => { this.setState({ prixOffre: e.target.value }) }} />

                                </div>
                            </div>
                            <div>
                                <div>Description d'offre</div>
                                <textarea className="textarea-border-style" placeholder="Description d'offre" onChange={(e) => { this.setState({ descriptionOffre: e.target.value }) }}></textarea>
                            </div>

                        </div>

                        <div style={{ marginTop: '15px' }}>
                            <button className='btn newsalle-host-btn' type='submit'>
                                Ajouter
                            </button>
                        </div>


                    </form>

                </div>
            </div>
        );
    }
}

export default NewHostSalle;