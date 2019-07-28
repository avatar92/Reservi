import React, { Component } from 'react';
import './signIn.css'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <button type="button" class="btn specialcolor-btn" data-toggle="modal" data-target="#my">Sign in</button>
                <div className="modal fade" id="my" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title text-center modal-h4" id="myModalLabel">Sign In</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            
                            </div>
                            <div className="modal-body">
                                <form className="signup-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="User Name" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-style btn-block">Log In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;