import React, { Component } from 'react';
import './newSalle.css';
import NavBar from '../navBar';
import Footer from '../footer.js';
import ImageUploader from 'react-images-upload';
import AdminNavBar from '../admin_page/AdminNavBar.js'

class NewSalle extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
		this.onDrop = this.onDrop.bind(this);
        
    }
  
    clearImage() {
        this.imageUploader.clearPictures();
    }
    onDrop(picture) {
        let text = ''
        if (this.state.pictures.length === 0 && picture.length > 4) {
            text = ''
            this.setState({
                pictures: []
            })
            picture.length = 0
            alert('vous ne pouvez pas ajouter plus que 4 photos')
        } else if (this.state.pictures.length === 0 && picture.length <= 4) {
            this.setState({
                pictures: this.state.pictures.concat(picture)
            })
            text = '<ul>'
            picture.map((pic) => (
                text += '<li onClick={this.clearImage} className="list-group-item list-group-item-success">' + pic.name + '</li>'
            ))
            text += '</ul>'
            picture.length = 0
        } else if (this.state.pictures.length !== 0 && (this.state.pictures.length + picture.length > 4)) {
            text = '<ul>'
            this.state.pictures.map((pic) => (
                text += '<li className="list-group-item list-group-item-success">' + pic.name + '</li>'
            ))
            for (let i = 0; i < 4 - this.state.pictures.length; i++) {

                this.setState({
                    pictures: this.state.pictures.concat(picture[i].name)
                })
                text += '<li className="list-group-item list-group-item-success">' + picture[i].name + '</li>'
            }
            text += '</ul>'
            picture.length = 0
            alert('vous ne pouvez pas ajouter plus que 4 photos')
        } else if (this.state.pictures.length !== 0 && (this.state.pictures.length + picture.length <= 4)) {
            this.setState({
                pictures: this.state.pictures.concat(picture)
            })
            text = '<ul>'
            this.state.pictures.map(pic => (
                text += '<li className="list-group-item list-group-item-success">' + pic.name + '</li>'
            ))
            picture.map(pic => (
                text += '<li className="list-group-item list-group-item-success">' + pic.name + '</li>'
            ))
            text += '</ul>'

            picture.length = 0
        }
        document.getElementById('affiche-input').innerHTML = text
    }

    render() {
        return (
            <div>
                <AdminNavBar />
                <div className="newSalle-first-container">
                    <div className="container newSalle-second-container">
                        <div>

                            <div className="newSalle-title"><h1>Créer votre annonce ici</h1></div>
                            <p className='newSalle-label-categorie'>choisissez une catégorie: </p>
                            <div className="dropdown" style={{ margin: '0 auto' }}>
                                <button className="btn btn-secondary dropdown-toggle annonce-categorie" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Catégorie
                                </button>
                                <div style={{ width: '20vw' }} className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Salle des fêtes</button>
                                    <button className="dropdown-item" type="button">salle de sport</button>
                                    <button className="dropdown-item" type="button">salle d'esthétique</button>
                                </div>
                            </div>
                            <form className="newSalle-form">
                                <p className='newSalle-label-categorie'>Nom de la salle:</p>
                                <input type='text'/>
                                <p className='newSalle-label-categorie'>Ajouter des photos:</p>
                                <div className='d-flex newSalle-image-container'>
                                    <div className='newSalle-image-collection' style={{ border: '2px dashed grey' }}>
                                        <ImageUploader
                                            withIcon={true}
                                            buttonText='Ajouter images'
                                            onChange={this.onDrop}
                                            accept='image/*'
                                            maxFileSize={5242880}
                                            label='taille maximum: 5mb'
                                            inputRef={iu => this.imageUploader = iu}
                                        />
                                        {/* https://github.com/JakeHartnell/react-images-upload */}
                                    </div>
                                    <div className='newSalle-image-name' id='affiche-input' style={{ textSize: '35px' }}></div>
                                </div>


                            </form>







                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default NewSalle;