import React, { Component } from 'react';
import './devs.css';

class Devs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container devSection'>
                <div className='row'>        
                    <div className="dev col-4">
                        <div className="description">
                            <div className='devimage'>
                                <img src='https://raw.githubusercontent.com/AmineOthman/Final-project/master/src/amine.png' alt="amine"/>
                                <p className='devdescription'>Amine Othmane <br></br>FullStack developer</p>
                            </div>
                            
                        </div>                               
                        <div className="social-links">
                            <a href="https://www.facebook.com/amine.othman"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.facebook.com/amine.othman"><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/AmineOthman"><i class="fa fa-github"></i></a>
                        </div>
                    </div>


                    <div className="dev col-4">
                        <div className="description">
                            <div className='devimage'>
                                <img src='https://raw.githubusercontent.com/AmineOthman/Final-project/master/src/asma.png' alt="amine"/>
                                <p className='devdescription'>Asma Kheder <br></br>FullStack developer</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://www.facebook.com/20.AsMa20"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.facebook.com/20.AsMa20"><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/khedher-asma"><i class="fa fa-github"></i></a>
                        </div>

                    </div>

                    <div className="dev col-4">
                        <div className="description">
                            <div className='devimage'>
                                <img  className='blackandwhite' src='https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/60413678_2173093146102564_8862264565430222848_n.jpg?_nc_cat=108&_nc_oc=AQmS1Up_nwdXzefEOvNWl6mZQssESWsi75MOaDbNZjkfPYYqnKg1vSVaFd8D8f1BWlc&_nc_ht=scontent.ftun12-1.fna&oh=8043400c3a62efd655d676320f09902a&oe=5DBA0206' alt="amine"/>
                                <p className='devdescription'>Adel ben salem <br></br>FullStack developer</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://www.facebook.com/bokhla"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.facebook.com/bokhla"><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/avatar92"><i class="fa fa-github"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Devs;