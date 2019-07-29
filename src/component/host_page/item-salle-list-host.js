import React, { Component } from 'react';
import { connect } from 'react-redux'
class ItemSalleList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" style={{ height: '225px', width: '100%', display: 'block' }} src={this.props.img} data-holder-rendered="true" />
                    <div className="card-body">
                        <div className="card-text"><h1 style={{ color: 'grey' }}>{this.props.name}</h1><p>{this.props.categorie}{this.props.idSalle}</p></div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Consulter</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={(e) => {
                                    e.preventDefault()
                                    this.props.removeHostSalle(this.props.idSalle, this.props.categorie)
                                }}>Supprimer</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Modifier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeHostSalle: (idSalle, categorie) => {
            if (categorie === 'Salle des fêtes') {
                dispatch({
                    type: 'REMOVE_HOST_SALLE_FETE',
                    idSalle

                })
            } else if (categorie === 'Salle de sport') {
                dispatch({
                    type: 'REMOVE_HOST_SALLE_SPORT',
                    idSalle

                })
            } else if (categorie === "Salle d'esthétique") {
                dispatch({
                    type: 'REMOVE_HOST_SALLE_ESTHETIQUE',
                    idSalle

                })
            }

        }
    }
}
export default connect(null, mapDispatchToProps)(ItemSalleList);