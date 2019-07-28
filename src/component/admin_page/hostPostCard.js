import React, { Component } from 'react';
import './hostPostCard.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class HostPostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <article className="card card--1 adminFetchedCard">
                <div className='disabledWithoutHover'><button className='btn btn-danger removeBtn' onClick={()=>this.props.RemoveSalle(this.props._id)}>Remove</button></div>
                <div className="card__info-hover">
                </div>
                <div className="card__img"></div>
                    <span className="card_link">
                        <div className="card__img--hover"><Link to='/salle/:_id'><img className="card-img-top" src={this.props.img} alt="salle"/></Link></div>
                    </span>
                <div className="card__info cardbehindRm">
                    <span className="card__category"><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.location}</span>
                    <h3 className="card__title">{this.props.salleName}</h3>
                    <span className="card__by">
                        <Link to ='/salle/:_id' className="card__author" title="author">Plus de detailles</Link>
                    </span>
                </div>
            </article>
        );
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        RemoveSalle: (_id) => {
            dispatch({
                type: 'REMOVE_SALLE_ESTHETIQUE',
                _id
            })
            dispatch({
                type: 'REMOVE_SALLE_SPORT',
                _id
            })
            dispatch({
                type: 'REMOVE_SALLE_FETE',
                _id
            })
        },  
    }
}
 
export default connect(null,mapDispatchToProps)(HostPostCard);