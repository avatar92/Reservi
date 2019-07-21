import React, { Component } from 'react';
import './salleItem.css'

class SalleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cards">
                <article className="card card--1">
                <div className="card__img"></div>
                <a href="#" className="card_link">
                    <div className="card__img--hover"></div>
                </a>
                <div className="cardInfo">
                    <span className="cardTitle"> Recipe</span>
                    <h3 className="cardLocation">Crisp Spanish tortilla Matzo brei</h3>
                    <span className="card__by">by <a href="#" className="card__author" title="author">Celeste Mills</a></span>
                </div>
                </article>
            </div>
        );
    }
}
 
export default SalleItem;