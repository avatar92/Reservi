import React, { Component } from 'react';
import './cardsection.css'
import {Link} from 'react-router-dom'

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
                        <h1 className='titleColor title'>Salle des Fétes</h1>
                        <p className='justifier'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo tempor leo id sollicitudin. Quisque iaculis metus sed tellus rutrum porta. Duis faucibus dui sed augue hendrerit viverra. Fusce sit amet pretium turpis, at tristique dui. Quisque massa nunc, porta sed diam non, porttitor consectetur ligula. Nunc vehicula tortor augue, sit amet luctus metus mollis vitae. Praesent eget mollis ante.</p>
                        <Link to='/salle_des_Fétes'><button type="button" class="bouton">Consulter</button></Link>
                    </div>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 cardsection'>
                        <img className="samewidthAndHeight image" src="http://www.zifef.com/zifefdata/4691/3923/photos/ph43646964300.jpeg" alt="Salle des Fétes"/> 
                    </div>
                </div>
                <div className='row secondRow dispabledsmallScreen'>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 cardsection2'>
                        <img className="samewidthAndHeight image2" src="https://webfiles1.luxweb.com/upload/cms/818/large/f7620c77-4e68-4db2-8c23-1449731cc2b7.jpg" alt="Salle de Sport"/> 
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <h1 className='SportsTitle title'>Salle Sports</h1>
                        <p className='justifier'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo tempor leo id sollicitudin. Quisque iaculis metus sed tellus rutrum porta. Duis faucibus dui sed augue hendrerit viverra. Fusce sit amet pretium turpis, at tristique dui. Quisque massa nunc, porta sed diam non, porttitor consectetur ligula. Nunc vehicula tortor augue, sit amet luctus metus mollis vitae. Praesent eget mollis ante.</p>
                        <Link to='/salle_de_sports'><button type="button" class="bouton2">Consulter</button></Link>
                    </div>
                </div>
                <div className='row secondRow dispabledlgScreen'>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <h1 className='SportsTitle title'>Salle Sports</h1>
                        <p className='justifier'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo tempor leo id sollicitudin. Quisque iaculis metus sed tellus rutrum porta. Duis faucibus dui sed augue hendrerit viverra. Fusce sit amet pretium turpis, at tristique dui. Quisque massa nunc, porta sed diam non, porttitor consectetur ligula. Nunc vehicula tortor augue, sit amet luctus metus mollis vitae. Praesent eget mollis ante.</p>
                        <Link to='/salle_de_sports'><button type="button" class="bouton2">Consulter</button></Link>
                    </div>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 cardsection2'>
                        <img className="samewidthAndHeight image2" src="https://webfiles1.luxweb.com/upload/cms/818/large/f7620c77-4e68-4db2-8c23-1449731cc2b7.jpg" alt="Salle de Sport"/> 
                    </div>
                </div>
                <div className='row ThirdRow'>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <h1 className='titleColor title'>Salle des Esthétique</h1>
                        <p className='justifier'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo tempor leo id sollicitudin. Quisque iaculis metus sed tellus rutrum porta. Duis faucibus dui sed augue hendrerit viverra. Fusce sit amet pretium turpis, at tristique dui. Quisque massa nunc, porta sed diam non, porttitor consectetur ligula. Nunc vehicula tortor augue, sit amet luctus metus mollis vitae. Praesent eget mollis ante.</p>
                        <Link to='/salle_ésthétique'><button type="button" class="bouton">Consulter</button></Link>
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