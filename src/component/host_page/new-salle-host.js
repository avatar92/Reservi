import React, { Component } from 'react';
import HostNavBar from './hostNavBar2.js';
import './new-salle-host.css';
import Footer from '../footer.js';
import { connect } from 'react-redux';
import axios from 'axios';

class NewHostSalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUser: this.props.user[0]._id,
            showSalleFete: false,
            showSalleSportEsthetique: false,
            category: '',
            titre: '',
            description: '',
            adresse: '',
            ville: '',
            telFixe: '',
            telMobile: '',
            capacite: '',
            prixSalle: '',
            nomOffre: '',
            prixOffre: '',
            descriptionOffre: '',
            imageSource: ''
        }

    }
    addSalle = () => {
        axios.post('/add-salle-fete-host', { ...this.state })
            .then( 
                () =>
                {
                    this.props.createSalle({ ...this.state })
                    return axios.post('/add-salle-sport-host', { ...this.state })
                }
            )
            .then(
                () =>
                {
                    this.props.createSalle({ ...this.state })                    
                    return axios.post('/add-salle-esthetique-host', { ...this.state })
                }
            )
            .catch((err) => alert(err))
    }
    handleImage = (e) => {
        var reader = new FileReader();
        reader.onload = (event) => {
            var img = new Image();
            img.onload = function () {
                document.getElementById('imageCanvas').width = img.width;
                document.getElementById('imageCanvas').height = img.height;
                document.getElementById('imageCanvas').getContext('2d').drawImage(img, 0, 0);
            }
            img.src = event.target.result;
            console.log(img.src)
            this.setState({ imageSource: img.src })
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    handleCategory(e) {
        this.setState({ category: e.target.value })
        if (e.target.value === 'Salle des fêtes') {
            this.setState({ showSalleFete: true })
            this.setState({ showSalleSportEsthetique: false })
        } else {
            this.setState({ showSalleFete: false })
            this.setState({ showSalleSportEsthetique: true })
        }
    }
    render() {
        const allHostSalle = this.props.salleFete.concat(this.props.salleSport, this.props.salleEsthetique)
        console.log('idddddddddddd', typeof (Number(this.props._id)))
        const modifiedElm = allHostSalle.filter(el => el._id === Number(this.props._id))
        console.log(modifiedElm)

        return (
            <div className="newsalle-host-main">
                <HostNavBar />
                <div className="newsalle-host" >
                    <div className="newsalle-host-title">
                        Ajouter un nouveau contenu
                    </div>
                    <div>
                        {this.props.disabled
                            ?
                            <select className="form-control newsalle-host-dropdown" disabled defaultValue={this.props._id ? modifiedElm[0].category : ''} onChange={(e) => this.handleCategory(e)}>
                                <option hidden>Catégorie</option>
                                <option>Salle des fêtes</option>
                                <option>Salle de sport</option>
                                <option>Salle d'esthétique</option>
                            </select>
                            :
                            <select className="form-control newsalle-host-dropdown" defaultValue={this.props._id ? modifiedElm[0].category : ''} onChange={(e) => this.handleCategory(e)}>
                                <option hidden>Catégorie</option>
                                <option>Salle des fêtes</option>
                                <option>Salle de sport</option>
                                <option>Salle d'esthétique</option>
                            </select>
                        }
                    </div>
                    <form>
                        <div className='newsalle-host-space'>
                            <div>Titre*</div>
                            <div>
                                <input className="input-border-style" type="text" placeholder="Titre" required onChange={(e) => { this.setState({ titre: e.target.value }) }} defaultValue={this.props._id ? modifiedElm[0].salleName : ''} />
                            </div>
                        </div>

                        <div className='newsalle-host-space'>
                            <div>Description*</div>
                            <div>
                                <textarea className="textarea-border-style" placeholder="Description" required onChange={(e) => { this.setState({ description: e.target.value }) }}>{this.props._id ? modifiedElm[0].description : ''}</textarea>
                            </div>
                        </div>
                        <div className='newsalle-host-space'>
                            <div>Adresse*</div>
                            <input className="input-border-style" type="text" placeholder="Adresse" required onChange={(e) => { this.setState({ adresse: e.target.value }) }} defaultValue={this.props._id ? modifiedElm[0].adresse : ''} />
                        </div>
                        <div className="newsalle-host-section newsalle-host-space" >
                            <div>Ville*</div>
                            <select className="form-control newsalle-host-dropdown" defaultValue={this.props._id ? modifiedElm[0].location : ''} onChange={(e) => { this.setState({ ville: e.target.value }) }} >
                                <option hidden>Gouvernorat</option>
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
                        {/**************************************** */}
                        <div className='newsalle-host-space'>
                            <div>Image*</div>
                            <div className='4photo '>
                                <div>
                                    <input type="file" id='imagetoupload' style={{ "display": "none" }} className='imageInput' accept="image/png, image/jpeg" onChange={this.handleImage} />
                                    <label for="imagetoupload" style={{ "borderStyle": "none none solid none", borderWidth: '1px', "width": "100%", fontSize: '18px' }}>Click me to upload image</label>
                                    <canvas id="imageCanvas" className='canvasNotshown'></canvas>
                                </div>
                            </div>
                        </div>

                        {/**************************************** */}
                        <div className='row newsalle-host-space'>
                            <div className='col-sm-6'>
                                <div>
                                    Téléphone Fixe*
                                </div>
                                <input className="input-border-style" type="text" placeholder="Fixe" required onChange={(e) => { this.setState({ telFix: e.target.value }) }} defaultValue={this.props._id ? modifiedElm[0].telfix : ''} />

                            </div>
                            <div className='col-sm-6'>
                                <div>
                                    Téléphone mobile*
                                </div>
                                <input className="input-border-style" type="text" placeholder="Mobile" required onChange={(e) => { this.setState({ telMobile: e.target.value }) }} defaultValue={this.props._id ? modifiedElm[0].telmobile : ''} />
                            </div>
                        </div>
                        <div className='newsalle-host-salleFete newsalle-host-space' style={((this.props._id && modifiedElm[0].category === 'Salle des fêtes') || this.state.showSalleFete) ? { display: 'block' } : { display: 'none' }}>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div>
                                        Capacité
                                    </div>
                                    <input className="input-border-style" type="text" placeholder="Capacité" onChange={(e) => { this.setState({ capacite: e.target.value }) }} defaultValue={(this.props._id && modifiedElm[0].category === 'Salle des fêtes') ? modifiedElm[0].capacite : ''} />

                                </div>
                                <div className='col-sm-6'>
                                    <div>
                                        Prix salle
                                    </div>
                                    <input className="input-border-style" type="text" placeholder="Prix" onChange={(e) => { this.setState({ prixSalle: e.target.value }) }} defaultValue={(this.props._id && modifiedElm[0].category === 'Salle des fêtes') ? modifiedElm[0].prixSalle : ''} />
                                </div>
                            </div>
                        </div>
                        <div className='newsalle-host-sport-esthetique newsalle-host-space' style={((this.props._id && modifiedElm[0].category !== 'Salle des fêtes') || this.state.showSalleSportEsthetique) ? { display: 'block' } : { display: 'none' }}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>
                                        Nom offre
                                </div>
                                    <input className="input-border-style" type="text" placeholder="Nom d'offre" onChange={(e) => { this.setState({ nomOffre: e.target.value }) }}
                                        defaultValue={(this.props._id && (modifiedElm[0].category === 'Salle de sport' || modifiedElm[0].category === "Salle d'esthétique")) ? modifiedElm[0].offre.nomOffre : ''} />
                                </div>
                                <div className="col-sm-6">
                                    <div>
                                        Prix offre
                                </div>
                                    <input className="input-border-style" type="text" placeholder="Prix d'offre" onChange={(e) => { this.setState({ prixOffre: e.target.value }) }}
                                        defaultValue={(this.props._id && (modifiedElm[0].category === 'Salle de sport' || modifiedElm[0].category === "Salle d'esthétique")) ? modifiedElm[0].offre.prixOffre : ''}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>Description d'offre</div>
                                <textarea className="textarea-border-style" placeholder="Description d'offre" onChange={(e) => { this.setState({ descriptionOffre: e.target.value }) }}
                                >
                                    {(this.props._id && (modifiedElm[0].category === 'Salle de sport' || modifiedElm[0].category === "Salle d'esthétique")) ? modifiedElm[0].offre.descriptionOffre : ''}
                                </textarea>
                            </div>
                        </div>

                        <div className='newsalle-host-submit-div'>
                            {this.props._id ?
                                <div className='btn newsalle-host-submit-btn' type='submit'
                                    onClick={() =>
                                        this.props.modifSalle(
                                            this.props._id,
                                            this.state.imageSource !== '' ? this.state.imageSource : modifiedElm[0].img,
                                            this.state.imageSource !== '' ? this.state.imageSource : modifiedElm[0].img1,
                                            this.state.imageSource !== '' ? this.state.imageSource : modifiedElm[0].img2,
                                            this.state.imageSource !== '' ? this.state.imageSource : modifiedElm[0].img3,
                                            this.state.idUser,
                                            modifiedElm[0].category,
                                            this.state.titre !== '' ? this.state.titre : modifiedElm[0].salleName,
                                            this.state.description !== '' ? this.state.description : modifiedElm[0].description,
                                            this.state.adresse !== '' ? this.state.adresse : modifiedElm[0].adresse,
                                            this.state.ville !== '' ? this.state.ville : modifiedElm[0].location,
                                            this.state.telFixe !== '' ? this.state.telFixe : modifiedElm[0].telfix,
                                            this.state.telMobile !== '' ? this.state.telMobile : modifiedElm[0].telmobile,
                                            this.state.capacite !== '' ? this.state.capacite : (modifiedElm[0].capacite === undefined ? '' : modifiedElm[0].capacite),
                                            this.state.prixSalle !== '' ? this.state.prixSalle : (modifiedElm[0].prixSalle === undefined ? '' : modifiedElm[0].prixSalle),
                                            this.state.nomOffre !== '' ? this.state.nomOffre : (modifiedElm[0].offre === undefined ? '' : modifiedElm[0].offre.nomOffre),
                                            this.state.prixOffre !== '' ? this.state.prixOffre : (modifiedElm[0].offre === undefined ? '' : modifiedElm[0].offre.prixOffre),
                                            this.state.descriptionOffre !== '' ? this.state.descriptionOffre : (modifiedElm[0].offre === undefined ? '' : modifiedElm[0].offre.descriptionOffre, this.state.category)
                                        )

                                    }>
                                    Modifier
                                </div>
                                :
                                <div className='btn newsalle-host-submit-btn' type='submit'
                                    onClick={() =>
                                        this.props.createSalle(
                                            this.state.imageSource,
                                            this.state.imageSource,
                                            this.state.imageSource,
                                            this.state.imageSource,
                                            this.state.idUser,
                                            this.state.category,
                                            this.state.titre,
                                            this.state.description,
                                            this.state.adresse,
                                            this.state.ville,
                                            this.state.telFixe,
                                            this.state.telMobile,
                                            this.state.capacite,
                                            this.state.prixSalle,
                                            this.state.nomOffre,
                                            this.state.prixOffre,
                                            this.state.descriptionOffre
                                        )

                                    }>
                                    Ajouter
                            </div>}


                        </div>
                    </form>

                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.hostReducer,
        salleFete: state.salleFeteReducer,
        salleSport: state.salleSportReducer,
        salleEsthetique: state.salleEsthetiqueReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createSalle: (img, img1, img2, img3, idUser, category, salleName, description, adresse, location, telfix, telmobile, capacite, prixSalle, nomOffre, prixOffre, descriptionOffre) => {
            if (category === 'Salle des fêtes') {
                console.log('ajout fete')
                dispatch({
                    type: 'ADD_NEW_SALLE_FETE',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id: Math.random() * 1000,
                        salleName,
                        location,
                        idUser,
                        description,
                        adresse,
                        telfix,
                        telmobile,
                        capacite,
                        prixSalle,
                        category
                    }
                })
            } else if (category === "Salle de sport") {
                console.log('ajout sport')

                dispatch({
                    type: 'ADD_NEW_SALLE_SPORT',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id: Math.random() * 1000,
                        salleName,
                        location,
                        idUser,
                        description,
                        adresse,
                        telfix,
                        telmobile,
                        category,
                        offre: { nomOffre, prixOffre, descriptionOffre }
                    }
                })
            } else if (category === "Salle d'esthétique") {
                console.log('ajout esthetik')

                dispatch({
                    type: 'ADD_NEW_SALLE_ESTHETIQUE',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id: Math.random() * 1000,
                        salleName,
                        location,
                        idUser,
                        description,
                        adresse,
                        telfix,
                        telmobile,
                        category,
                        offre: { nomOffre, prixOffre, descriptionOffre }
                    }
                })
            }

        },
        modifSalle: (modifiedID, img, img1, img2, img3, idUser, category, salleName, description, adresse, location, telfix, telmobile, capacite, prixSalle, nomOffre, prixOffre, descriptionOffre, modifiedCategory) => {
            console.log(nomOffre, prixOffre, descriptionOffre)
            if (category === 'Salle des fêtes') {

                console.log('modif fete')

                dispatch({
                    type: 'MODIF_SALLE_FETE',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id: Number(modifiedID),
                        salleName,
                        location,
                        idUser,
                        description,
                        adresse,
                        telfix,
                        telmobile,
                        capacite,
                        prixSalle,
                        category
                    }
                })
            } else if (category === 'Salle de sport') {
                console.log('modof sport', modifiedID)

                dispatch({
                    type: 'MODIF_SALLE_SPORT',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id: Number(modifiedID),
                        salleName,
                        location,
                        idUser,
                        description,
                        adresse,
                        telfix,
                        telmobile,
                        category,
                        offre: { nomOffre, prixOffre, descriptionOffre }
                    }
                })

            } else if (category === "Salle d'esthétique") {
                console.log('modif esht', modifiedID)

                dispatch({
                    type: 'MODIF_SALLE_ESTHETIQUE',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id: Number(modifiedID),
                        salleName,
                        location,
                        idUser,
                        description,
                        adresse,
                        telfix,
                        telmobile,
                        category,
                        offre: { nomOffre, prixOffre, descriptionOffre },
                    }
                })
            }

        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewHostSalle);