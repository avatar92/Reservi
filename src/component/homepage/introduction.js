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
                            <Typing hideCursor loop speed={100} className='same-line' >
                            <h1>Welcome To Reservi.tn</h1>
                                <Typing.Delay ms={2500} />
                                <Typing.Backspace count={21} />
                                <Typing.Delay ms={100} />
                                <Typing.Reset delay={50} />
                            </Typing>
                            
                        </div>
                        {/* Sign Up */}
                        <div className="col-md-5 offset-md-1">
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
                                    <button type="submit" className="btn btn-style btn-block">Start Now</button>
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