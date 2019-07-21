import React, { Component } from 'react'
class SignIn extends Component {
    render() {
        return (
            <div className="modal fade" id="SignIn" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title text-center" id="myModalLabel">Sign In</h4>
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
                                    <button type="submit" className="btn btn-blue btn-block">Log In</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer text-center">
                            <a href="/">Forgot your password /</a>
                            <a href="/">Signup</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignIn;