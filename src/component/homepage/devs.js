import React, { Component } from 'react';
import './devs.css';

class Devs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="devs">
                <div className="dev1">
                    <div className="description">
                        <img src='https://raw.githubusercontent.com/AmineOthman/Final-project/master/src/amine.png' alt="amine"></img>
                        <div>
                            <p>Amine Othmane <br></br>FullStack developer</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/amine.othman"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/AmineOthman"><i class="fa fa-github"></i></a>
                    </div>
                </div>


                <div className="dev2">
                    <div className="description">
                        <img src='https://raw.githubusercontent.com/AmineOthman/Final-project/master/src/asma.png' alt="asma"></img>
                        <div>
                            <p>Asma Kheder <br></br>FullStack developer</p>

                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/20.AsMa20"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/khedher-asma"><i class="fa fa-github"></i></a>
                    </div>

                </div>

                <div className="dev3">
                    <div className="description">
                        <img src='https://raw.githubusercontent.com/AmineOthman/Final-project/master/src/adel.png' alt="adel"></img>
                        <div>
                            <p>Adel ben salem <br></br>FullStack developer</p>

                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/bokhla"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/avatar92"><i class="fa fa-github"></i></a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Devs;