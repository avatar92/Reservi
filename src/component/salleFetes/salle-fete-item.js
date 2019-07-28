import React, { Component } from 'react';
import NavBar from '../navBar';
import Footer from '../footer.js';
import './salle-fete-item.css'
import Calendar from 'react-calendar';
let disabledDates = [
    new Date(2018, 7, 7),
    new Date(2019, 7, 7),
];
class SalleFete2 extends Component {
    constructor(props) {
        super(props);
        this.state = {date: ''}
    }
  
    tileDisabled=(date, view) =>{
        (view === 'month') && // Block day tiles only
        disabledDates.some(disabledDate =>
            date.getFullYear() === disabledDate.getFullYear() &&
            date.getMonth() === disabledDate.getMonth() &&
            date.getDate() === disabledDate.getDate())
}
    render() {
        return (
            <div>
                <NavBar />
                <div className="salle-fete-image-container">
                    <h1 style={{ color: '#00b39b', textAlign: 'center' }}>Le versailles</h1>

                    <div className="salle-fete-container">
                        <div className="salle-fete-box">
                            <img src={require("./image/img4.jpg")} />
                        </div>
                        <div className="salle-fete-box">
                            <img src={require("./image/img1.jpg")} />
                        </div>
                        <div className="salle-fete-box">
                            <img src={require("./image/img2.jpg")} />
                        </div>
                        <div className="salle-fete-box">
                            <img src={require("./image/img3.jpg")} />
                        </div>
                    </div>
                </div>
                <div className='container salle-fete-description-container'>
                    <div>
                        <h3 style={{ color: '#3d83df' }}>Description</h3>
                        <p>
                            le versailles est une salle de fête polyvalente, haut de gamme et raffinée.
                            Elle offre une grande salle couverte et climatisée.
                            Magnifiquement éclairée la nuit, son architecture très design sert d'écrin à une atmosphère chaleureuse et conviviale, qui rendra inoubliables votre cérémonie de mariage..

                        </p>
                        <p><b>Capacité: </b>500</p>
                        <p><b>Prix: </b>1500-6000 Dt</p>
                        <p><b>Ville: </b>Sousse</p>
                    </div>
                    <hr />
                    <div>
                        <h3 style={{ color: '#3d83df' }}>Adresse</h3>
                    </div>
                    <hr />
                    <div>
                        <h3 style={{ color: '#3d83df' }}>Disponibilité </h3>

                        <Calendar
                        
                        onChange={(value) => console.log(value)}
                        tileDisabled={({ date, view }) => view === 'month' && date.getDay()} 
                        />

                    </div>
                    <hr />
                    <div>
                        <h3 style={{ color: '#3d83df' }}>Laissez votre avis</h3>
                        <div>

                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default SalleFete2;