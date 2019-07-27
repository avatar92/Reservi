import React, {Component} from 'react';
import adel from '../../img/adel.jpg';
import asma from '../../img/asma.jpg';
import amine from '../../img/amine.png';
import './Team.css';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section id="team" className="section-padding">
            <div className="container">
              <h2>Team Of Professionals</h2>
              <p>teamwork makes the dream work</p>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  {/***Team-Member***/}
                  <div className="thumbnail team-member">
                    <img src={adel} className="img-responsive img-circle" alt="team-1" />
                    <div className="caption">
                      <h4>Adel Ben Salem</h4>
                      <h6>Developer</h6>
                      <p>Mechatronic  engineer and a web  developer.<br/>
                          Find me on: <br/><br/>
                      </p>
                      <hr />
                      <div className="team-social">
                        <ul className="liste-unstyled">
                          <li><a href="https://www.facebook.com/bokhla"><i className="fa fa-facebook" /></a></li>
                          <li><a href="https://github.com/avatar92"><i className="fa fa-github" /></a></li>
                          <li><a href="#linkedin"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="#instagram"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  {/***Team-Member***/}
                  <div className="thumbnail team-member">
                    <img src={asma} className="img-responsive img-circle" alt="team-2" />
                    <div className="caption">
                      <h4>Asma Kedher</h4>
                      <h6>Developer</h6>
                      <p>Telecommunication engineer and a web developer.<br/>
                          Find me on:
                      </p>
                      <hr />
                      <div className="team-social">
                        <ul className="liste-unstyled">
                          <li><a href="https://www.facebook.com/20.AsMa20"><i className="fa fa-facebook" /></a></li>
                          <li><a href="https://github.com/khedher-asma"><i className="fa fa-github" /></a></li>
                          <li><a href="#linkedin"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="#instagram"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  {/***Team-Member***/}
                  <div className="thumbnail team-member">
                    <img src={amine} className="img-responsive3 img-circle" alt="team-3" />
                    <div className="caption">
                      <h4>Amine Othmane</h4>
                      <h6>Developer</h6>
                      <p>Master on Mechanical engineering and a web developer.<br/>
                          Find me on:
                      </p>
                      <hr />
                      <div className="team-social">
                        <ul className="liste-unstyled">
                          <li><a href="https://www.facebook.com/amine.othman"><i className="fa fa-facebook" /></a></li>
                          <li><a href="https://github.com/AmineOthman"><i className="fa fa-github" /></a></li>
                          <li><a href="#linkedin"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="https://www.instagram.com/emino_92/"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         );
    }
}
 
export default Team;