import React, { Component } from 'react'
class ItemSalleList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" style={{height: '225px', width: '100%', display: 'block'}} src={this.props.img} data-holder-rendered="true" />
                    <div className="card-body">
                        <div className="card-text"><h1 style={{color:'grey'}}>{this.props.name}</h1><p>{this.props.categorie}</p></div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Consulter</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Supprimer</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Modifier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemSalleList;