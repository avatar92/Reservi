import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SalleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <article className="card card--1">
                <div className="card__info-hover">
                </div>
                <div className="card__img"></div>
                <a href="#" className="card_link">
                    <div className="card__img--hover"><Link to='/salle_fete/:_id'><img className="card-img-top" src={this.props.img} alt="salle" /></Link></div>
                </a>
                <div className="card__info">
                    <span className="card__category"><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.ville}</span>
                    <h3 className="card__title">{this.props.name}</h3>
                    <span className="card__by">
                        <Link to='/salle_fete/:_id' className="card__author" title="author">Plus de detailles</Link>
                    </span>
                </div>
            </article>
        );
    }
}

export default SalleItem;