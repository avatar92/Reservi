import React, { Component } from 'react';
import './cardsection.css'


class CardSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container cardSectionMain'>
                <div className='row firstRow'>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <h1>Salle des Fétes</h1>
                        <p className='justifier'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo tempor leo id sollicitudin. Quisque iaculis metus sed tellus rutrum porta. Duis faucibus dui sed augue hendrerit viverra. Fusce sit amet pretium turpis, at tristique dui. Quisque massa nunc, porta sed diam non, porttitor consectetur ligula. Nunc vehicula tortor augue, sit amet luctus metus mollis vitae. Praesent eget mollis ante.</p>
                        <button type="button" class="bouton">Consulter</button>
                    </div>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 cardsection'>
                        <img className="samewidthAndHeight image" src="http://www.zifef.com/zifefdata/4691/3923/photos/ph43646964300.jpeg" alt="Salle des Fétes"/> 
                    </div>
                </div>
                <div className='row secondRow'>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 cardsection2'>
                        <img className="samewidthAndHeight image2" src="https://webfiles1.luxweb.com/upload/cms/818/large/f7620c77-4e68-4db2-8c23-1449731cc2b7.jpg" alt="Salle de Sport"/> 
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <h1 className='SportsTitle'>Salle des Sports</h1>
                        <p className='justifier'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo tempor leo id sollicitudin. Quisque iaculis metus sed tellus rutrum porta. Duis faucibus dui sed augue hendrerit viverra. Fusce sit amet pretium turpis, at tristique dui. Quisque massa nunc, porta sed diam non, porttitor consectetur ligula. Nunc vehicula tortor augue, sit amet luctus metus mollis vitae. Praesent eget mollis ante.</p>
                        <button type="button" class="bouton2">Consulter</button>
                    </div>
                </div>
                <div className='row ThirdRow'>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <h1>Salle des Esthétique</h1>
                        <p className='justifier'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo tempor leo id sollicitudin. Quisque iaculis metus sed tellus rutrum porta. Duis faucibus dui sed augue hendrerit viverra. Fusce sit amet pretium turpis, at tristique dui. Quisque massa nunc, porta sed diam non, porttitor consectetur ligula. Nunc vehicula tortor augue, sit amet luctus metus mollis vitae. Praesent eget mollis ante.</p>
                        <button type="button" class="bouton">Consulter</button>
                    </div>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 cardsection'>
                        <img className="samewidthAndHeight image" src="https://www.lokfel.com/jvr2Ig81rsA/spa-1.jpg" alt="Salle éstétique"/> 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CardSection;