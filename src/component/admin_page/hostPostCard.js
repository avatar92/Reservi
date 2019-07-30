import React, { Component } from 'react';
import './hostPostCard.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'

class HostPostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    removeCardEsthetique=()=>
    {  const {_id} = this.props
    axios.delete(`/delete-salleEsthetique/${_id}`)   
    .then(()=>{this.props.RemoveSalle(_id) 
           console.log('hi')} )
           
    .catch((err)=>alert(err)) 
    }
    removeCardSport=()=>
    {  const {_id} = this.props
    axios.delete(`/delete-salleSport/${_id}`)   
    .then(()=>{this.props.RemoveSalle(_id) 
           console.log('hi')} )
           
    .catch((err)=>alert(err)) 
    }
    removeCardFete=()=>
    {  const {_id} = this.props
    axios.delete(`/delete-salleFete/${_id}`)   
    .then(()=>{this.props.RemoveSalle(_id) 
           console.log('hi')} )
           
    .catch((err)=>alert(err)) 
    }

    render() {
        console.log('MyPropsCard',this.props) 
        return ( 
            <article className="card card--1 adminFetchedCard">
                <div className='disabledWithoutHover'><button className='btn btn-danger removeBtn' onClick={()=>{this.removeCardEsthetique(this.props._id)
                                                                                                                this.removeCardFete(this.props._id)
                                                                                                                this.removeCardSport(this.props._id)}}>Remove</button></div>
                <div className="card__info-hover">
                </div>
                <div className="card__img"></div>
                    <span className="card_link">
                        <div className="card__img--hover"><Link to={`/salle/${ this.props._id }`}><img className="card-img-top" src={this.props.img} alt="salle"/></Link></div>
                    </span>
                <div className="card__info cardbehindRm">
                    <span className="card__category"><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.location}</span>
                    <h3 className="card__title">{this.props.salleName}</h3>
                    <span className="card__by">
                        <Link to={`/salle/${ this.props._id }`} className="card__author" title="author">Plus de detailles</Link>
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