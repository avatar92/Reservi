import React, { Component } from 'react';
import './introductionSection.css'


class IntroductionSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <div className='container introductionSection'>
                <div className='row'>
                    <h1 className='col-12 col-sm-12 col-lg-12 col-xl-12'>R.</h1>
                    <p className='col-6 offset-3 justifier'>Reservi.tn est un site de reservation en ligne dans lequelle vous pouvez reservez n'importe q'uelle chose en un click. vous pouvez trouverez des salles des fétes , des salle de sport , des salle esthétique etc...</p>
                </div>
            </div>
        );
    }
}
 
export default IntroductionSection;