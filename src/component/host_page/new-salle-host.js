import React, { Component } from 'react';
import HostNavBar from './hostNavBar2.js';
import './new-salle-host.css';
import Footer from '../footer.js';
import {connect} from 'react-redux';
class NewHostSalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSalleFete: false,
            showSalleSportEsthetique: false,
            category: '',
            titre: '',
            description: '',
            adresse: '',
            ville: '',
            listImage:null,
            telFixe: '',
            telMobile: '',
            capacite: '',
            prixSalle: '',
            nbrOffreSupp: 0,
            nomOffre: '',
            prixOffre: '',
            descriptionOffre: '',
            imageSource:'',
            imageSource1:'',
            imageSource2:'',
            imageSource3:'',
        }
    }
    handleImage=(e)=>{
        var reader = new FileReader();
        reader.onload =(event)=>{
            var img = new Image();
            img.onload = function(){
                document.getElementById('imageCanvas').width = img.width;
                document.getElementById('imageCanvas').height = img.height;
                document.getElementById('imageCanvas').getContext('2d').drawImage(img,0,0);
            }
            img.src = event.target.result;
            console.log(img.src)
            this.setState({imageSource:img.src})
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
    handleImage1=(e)=>{
        var reader = new FileReader();
        reader.onload =(event)=>{
            var img = new Image();
            img.onload = function(){
                document.getElementById('imageCanvas1').width = img.width;
                document.getElementById('imageCanvas1').height = img.height;
                document.getElementById('imageCanvas1').getContext('2d').drawImage(img,0,0);
            }
            img.src = event.target.result;
            console.log(img.src)
            this.setState({imageSource1:img.src})
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
    handleImage2=(e)=>{
        var reader = new FileReader();
        reader.onload =(event)=>{
            var img = new Image();
            img.onload = function(){
                document.getElementById('imageCanvas2').width = img.width;
                document.getElementById('imageCanvas2').height = img.height;
                document.getElementById('imageCanvas2').getContext('2d').drawImage(img,0,0);
            }
            img.src = event.target.result;
            console.log(img.src)
            this.setState({imageSource2:img.src})
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
    handleImage3=(e)=>{
        var reader = new FileReader();
        reader.onload =(event)=>{
            var img = new Image();
            img.onload = function(){
                document.getElementById('imageCanvas3').width = img.width;
                document.getElementById('imageCanvas3').height = img.height;
                document.getElementById('imageCanvas3').getContext('2d').drawImage(img,0,0);
            }
            img.src = event.target.result;
            console.log(img.src)
            this.setState({imageSource3:img.src})
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
    imageHandler = (e) => {
        this.setState({listImage:e.target.files})
    }
    imageUploadHandler = () => {
        const fd = new FormData()
        fd.append('imagefile',this.state.listImage,this.state.listImage.name)
        console.log(fd)

        // axios.post('lien',fd)
    }
    render() {
        console.log('myProps',this.props)
        return (
            <div className="newsalle-host-main">
                <HostNavBar />
                <div className="newsalle-host">
                    <div className="newsalle-host-title">
                        Ajouter un nouveau contenu
                    </div>
                    <div>
                        <select className="form-control newsalle-host-dropdown" onChange={(e) => this.handleCategory(e)}>
                            <option hidden>Catégorie</option>
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
                            <select className="form-control newsalle-host-dropdown" id="ville" required onChange={(e) => { this.setState({ ville: e.target.value }) }}>
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
                        <div className='4photo'>
                            <div>        
                                <input  type="file" id='imagetoupload' style={{"display":"none"}} className='imageInput' accept="image/png, image/jpeg" onChange={this.handleImage}/>
                                <label for="imagetoupload" style={{"border":"1px solid","width":"100%"}}>Click me to upload image</label>
                                <canvas id="imageCanvas" className='canvasNotshown'></canvas>
                             
                                {console.log('myImageCode',this.state.imageSource)}        
                            </div>
                            <div>        
                                <input  type="file" id='imagetoupload' style={{"display":"none"}} className='imageInput' accept="image/png, image/jpeg" onChange={this.handleImage}/>
                                <label for="imagetoupload" style={{"border":"1px solid","width":"100%"}}>Click me to upload image</label>
                                <canvas id="imageCanvas1" className='canvasNotshown'></canvas>
                             
                                {console.log('myImageCode',this.state.imageSource1)}        
                            </div>
                            <div>        
                                <input  type="file" id='imagetoupload' style={{"display":"none"}} className='imageInput' accept="image/png, image/jpeg" onChange={this.handleImage}/>
                                <label for="imagetoupload" style={{"border":"1px solid","width":"100%"}}>Click me to upload image</label>
                                <canvas id="imageCanvas2" className='canvasNotshown'></canvas>
                             
                                {console.log('myImageCode',this.state.imageSource1)}        
                            </div>
                            <div>        
                                <input  type="file" id='imagetoupload' style={{"display":"none"}} className='imageInput' accept="image/png, image/jpeg" onChange={this.handleImage}/>
                                <label for="imagetoupload" style={{"border":"1px solid","width":"100%"}}>Click me to upload image</label>
                                <canvas id="imageCanvas3" className='canvasNotshown'></canvas>
                                {console.log('myImageCode',this.state.imageSource1)}        
                            </div>
                        </div>
                        {/**************************************** */}
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
                                    <input className="input-border-style" type="text" placeholder="Capacité"  onChange={(e) => { this.setState({ capacite: e.target.value }) }} />

                                </div>
                                <div className='col-sm-6'>
                                    <div>
                                        Prix salle
                                    </div>
                                    <input className="input-border-style" type="text" placeholder="Prix"  onChange={(e) => { this.setState({ prix: e.target.value }) }} />

                                </div>
                            </div>
                        </div>
                        <div className='newsalle-host-sport-esthetique newsalle-host-space' style={this.state.showSalleSportEsthetique ? { display: 'block' } : { display: 'none' }}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>
                                        Nom offre
                                </div>
                                    <input className="input-border-style" type="text" placeholder="Nom d'offre" onChange={(e) => { this.setState({ nomOffre: e.target.value }) }} />
                                </div>
                                <div className="col-sm-6">
                                    <div>
                                        Prix offre
                                </div>
                                    <input className="input-border-style" type="text" placeholder="Prix d'offre" onChange={(e) => { this.setState({ prixOffre: e.target.value }) }} />
                                </div>
                            </div>
                            <div>
                                <div>Description d'offre</div>
                                <textarea className="textarea-border-style" placeholder="Description d'offre" onChange={(e) => { this.setState({ descriptionOffre: e.target.value }) }}></textarea>
                            </div>
                        </div>

                        <div className='newsalle-host-submit-div'>
                            <button className='btn newsalle-host-submit-btn' 
                             onClick={(event) =>
                                {
                                 
                                this.props.createSalle(
                                this.state.imageSource,
                                this.state.imageSource1,
                                this.state.imageSource2,
                                this.state.imageSource3,
                                this.props.user[0]._id,
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
                                event.preventDefault()    
                                }
                                }>
                                Ajouter
                            </button>
                        </div>
                    </form>

                </div>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        user:state.hostReducer
    }
}
const mapDispatchToProps =dispatch => {
    return{
        createSalle: (img,img1,img2,img3,idUser,category,titre,description,adresse,ville,telFix,telMobile,capacite,prixSalle,nomOffre,prixOffre,descriptionOffre) => {
            if(category=== 'Salle des fêtes'){
                dispatch({
                    type:'ADD_NEW_SALLE_FETE',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id:Math.random(),
                        salleName:titre,
                        location:ville,
                        idUser,
                        description,
                        adresse,
                        telFix,
                        telMobile,
                        capacite,
                        prixSalle,
                        category,
                        
                    }
                })
            }
            else if(category === "Salle de sport"){
                dispatch({
                    type:'ADD_NEW_SALLE_SPORT',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id:Math.random(),
                        titre,
                        ville,
                        idUser,
                        description,
                        adresse,
                        telFix,
                        telMobile,
                        offre:{nomOffre,prixOffre,descriptionOffre}
                    }
                })
            }else if(category==="Salle d'esthétique"){
                dispatch({
                    type:'ADD_NEW_SALLE_ESTHETIQUE',
                    value: {
                        img,
                        img1,
                        img2,
                        img3,
                        _id:Math.random(),
                        titre,
                        ville,
                        idUser,
                        description,
                        adresse,
                        telFix,
                        telMobile,
                        offre:{nomOffre,prixOffre,descriptionOffre}
                    }
                })
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewHostSalle);