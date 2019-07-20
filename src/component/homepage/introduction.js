import React, { Component } from 'react';
import './introduction.css'
import Typing from 'react-typing-animation';

class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <section id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 caption">
                            <h1>Welcome To
                            <Typing hideCursor loop speed={150} className='same-line' >
                                <span> Reservi.tn</span>
                                <Typing.Delay ms={2000} />
                                <Typing.Backspace count={10} />
                                <Typing.Reset delay={50} />
                            </Typing>
                            </h1>
                        </div>
                        {/* Sign Up */}
                        <div className="col-md-5 col-md-offset-1">
                            <form className="signup-form">
                                <h2 className="text-center">Signup Now</h2>
                                <hr />
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Full Name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="User Name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-blue btn-block">Start Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        );
    }

}


export default Introduction;