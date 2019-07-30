import React, { Component } from 'react';
import './salleDescription.css';
import { connect } from 'react-redux';
import Typing from 'react-typing-animation';


class SalleDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalData: this.props.salleEsthetiqueReducer.concat(this.props.salleSportReducer.concat(this.props.salleFeteReducer)),
            _id: Number(this.props._id),
        }
        this.el = this.state.totalData.filter(el => el._id === this.state._id)
    }
    render() {
        console.log('myID', this.state._id)
        console.log('myEL', this.el)
        return (
            <div className="salle-fete-image-container">
                <div className='description-first-section'>
                    <Typing hideCursor loop speed={100} className='same-line'  >
                        <h1 className='description-first-section-h1'>{this.el[0].salleName}</h1>
                        <Typing.Delay ms={2500} />
                        <Typing.Backspace count={this.el[0].salleName.length} />
                        <Typing.Delay ms={100} />
                        <Typing.Reset delay={50} />
                    </Typing>
                </div>
                <div className="container salle-fete-container" >
                    <div className="salle-fete-box">
                        <img src={this.el[0].img} alt='salleimage 1' />
                    </div>
                    <div className="salle-fete-box">
                        <img src={this.el[0].img1} alt='salleimage 2' />
                    </div>
                    <div className="salle-fete-box">
                        <img src={this.el[0].img2} alt='salleimage 3' />
                    </div>
                    <div className="salle-fete-box">
                        <img src={this.el[0].img3} alt='salleimage 4' />
                    </div>
                </div>
                <div className='container description-second-section ' >
                    <h3 className='description-second-section-h3'>Description</h3>
                    <div>
                        <p>{this.el[0].description}</p>
                    </div>
                    <div>
                        <p>Adresse: {this.el[0].adresse}, {this.el[0].location}</p>
                    </div>
                    <div>
                        <p>Contact: {this.el[0].telfix}/{this.el[0].telmobile}</p>
                    </div>
                    {this.el[0].category === 'Salle des fêtes' ?
                        <div>
                            <div>
                                <p>Prix: {this.el[0].prixSalle}</p>
                            </div>
                            <div>
                                <p>Capacité: {this.el[0].capacite}</p>
                            </div>
                        </div>
                        : true}
                {(this.el[0].category === "Salle de sport" || this.el[0].category === "Salle d'esthétique") ?
                    <div>
                        <div>
                        <h3 className='description-second-section-h3'>Mes Offres</h3>
                        </div>
                        <div>
                            <p>Nom de l'offre: { this.el[0].offre.nomOffre}</p>
                        </div>
                        <div>
                            <p>Prix offre: { this.el[0].offre.prixOffre}</p>
                        </div>
                        <div>
                            <p>Description de l'offre: { this.el[0].offre.descriptionOffre}</p>
                        </div>
                    </div>
                    : true}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        salleEsthetiqueReducer: state.salleEsthetiqueReducer,
        salleSportReducer: state.salleSportReducer,
        salleFeteReducer: state.salleFeteReducer
    }
}
export default connect(mapStateToProps, null)(SalleDescription);