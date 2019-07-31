import React, { Component } from 'react';
import './salleDescription.css';
import { connect } from 'react-redux';
import Typing from 'react-typing-animation';
import axios from 'axios'

class SalleDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        // this.el = this.state.totalData.filter(el => el._id === this.state._id)
    }
    componentDidMount = () => {
        axios.get('/get-salleEsthetique')
            .then((res) => {
                this.props.updateSalleEsthetiqueReducer(res.data)
                return axios.get('/get-salleSport')
            })
            .then((res) => {
                this.props.updateSalleSportReducer(res.data)
                return axios.get('/get-salleFete')
            })
            .then((res) => this.props.updateSalleFeteReducer(res.data))
    }
    render() {
        const _id= this.props._id
        const totalData= this.props.salleEsthetiqueReducer.concat(this.props.salleSportReducer.concat(this.props.salleFeteReducer))
        // console.log('myID', this.state._id)
        // console.log('myEL', this.el)
        const el = totalData.filter(el => el._id === _id)
        
        return (
            <div className="salle-fete-image-container">
                <div className='description-first-section'>
                    <Typing hideCursor loop speed={100} className='same-line'  >
                        <h1 className='description-first-section-h1'>{el[0].salleName}</h1>
                        <Typing.Delay ms={2500} />
                        <Typing.Backspace count={el[0].salleName.length} />
                        <Typing.Delay ms={100} />
                        <Typing.Reset delay={50} />
                    </Typing>
                </div>
                <div className="container salle-fete-container" >
                    <div className="salle-fete-box">
                        <img src={el[0].img} alt='salleimage 1' />
                    </div>
                    <div className="salle-fete-box">
                        <img src={el[0].img1} alt='salleimage 2' />
                    </div>
                    <div className="salle-fete-box">
                        <img src={el[0].img2} alt='salleimage 3' />
                    </div>
                    <div className="salle-fete-box">
                        <img src={el[0].img3} alt='salleimage 4' />
                    </div>
                </div>
                <div className='container description-second-section ' >
                    <h3 className='description-second-section-h3'>Description</h3>
                    <div>
                        <p>{el[0].description}</p>
                    </div>
                    <div>
                        <p>Adresse: {el[0].adresse}, {el[0].location}</p>
                    </div>
                    <div>
                        <p>Contact: {el[0].telfix}/{el[0].telmobile}</p>
                    </div>
                    {el[0].category === 'Salle des fêtes' ?
                        <div>
                            <div>
                                <p>Prix: {el[0].prixSalle}</p>
                            </div>
                            <div>
                                <p>Capacité: {el[0].capacite}</p>
                            </div>
                        </div>
                        : true}
                {(el[0].category === "Salle de sport" || el[0].category === "Salle d'esthétique") ?
                    <div>
                        <div>
                        <h3 className='description-second-section-h3'>Mes Offres</h3>
                        </div>
                        <div>
                            <p>Nom de l'offre: {el[0].offre.nomOffre}</p>
                        </div>
                        <div>
                            <p>Prix offre: { el[0].offre.prixOffre}</p>
                        </div>
                        <div>
                            <p>Description de l'offre: { el[0].offre.descriptionOffre}</p>
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
const mapDispatchToProps = (dispatch) => {
    return {
        updateSalleEsthetiqueReducer: init => {
            dispatch({
                type: 'UPDATE_SALLE_ESTHETIQUE',
                init
            })
        },
        updateSalleFeteReducer: allSalle => {
            dispatch({
                type: 'UPDATE_SALLE_FETE',
                allSalle
            })
        },
        updateSalleSportReducer: init => {
            dispatch({
                type: 'UPDATE_SALLE_SPORT',
                init
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SalleDescription);