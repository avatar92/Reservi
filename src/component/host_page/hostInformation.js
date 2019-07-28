import React, { Component } from 'react';
import HostNavBar from './hostNavBar';
import './hostInformation.css';
import { connect } from 'react-redux'
class HostInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: this.props.user[0].userInformation.fullName,
            userName: this.props.user[0].userInformation.userName,
            email: this.props.user[0].userInformation.email,
            password: this.props.user[0].userInformation.password,
            newPassword: '',
            confirmNewPassword: ''
        }
    }
    skander = (e) => {
        var err = []
        const asma = (this.state.confirmNewPassword !== '' && this.state.newPassword) === '' ? err.push('enter your new password') :
            (
                this.state.confirmNewPassword === '' && this.state.newPassword !== '' ? err.push('confirm your new password') : true
            )
        //    this.state.confirmNewPassword === '' || this.state.newPassword === '' ? this.skander : this.props.editInformation(this.state.fullName,this.state.userName,this.state.email,this.state.password,this.state.newPassword,this.state.confirmNewPassword)

    }
    render() {
        console.log('message', this.state.fullName, this.state.userName, this.state.email, this.state.password, this.state.newPassword, this.state.confirmNewPassword)
        return (
            <div>
                <HostNavBar />
                <div className=' personal-information'>
                    <form>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div>
                                    <b>Full name</b>
                                </div>
                                <input className='personal-information-input' type='text' required value={this.state.fullName} onChange={(e) => {
                                    this.setState({ fullName: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>User name</b>
                                </div>
                                <input className='personal-information-input' type='text' required value={this.state.userName} onChange={(e) => {
                                    this.setState({ userName: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>Address email</b>
                                </div>
                                <input className='personal-information-input' type='email' required value={this.state.email} onChange={(e) => {
                                    this.setState({ email: e.target.value })
                                }} />
                            </div>
                        </div >
                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <div>
                                    <b>Actual password</b>
                                </div>
                                <input className='personal-information-input' type='text' required onChange={(e) => {
                                    this.setState({ password: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>New password</b>
                                </div>
                                <input className='personal-information-input' type='text' onChange={(e) => {
                                    this.setState({ newPassword: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>Confirm new password</b>
                                </div>
                                <input className='personal-information-input' type='text' onChange={(e) => {
                                    this.setState({ confirmNewPassword: e.target.value })
                                }} />
                            </div>

                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <div className='btn personal-information-btn' type='submit'
                                onClick={(e) => {
                                    this.props.editInformation(this.state.fullName, this.state.userName, this.state.email, this.state.password, this.state.newPassword, this.state.confirmNewPassword)
                                }}
                            >
                                Submit
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editInformation: (fullName, userName, email, password, newPassword, confirmNewPassword) => {
            dispatch({
                type: 'EDIT_PERSONAL_INFORMATION',
                value: {
                    fullName,
                    userName,
                    email,
                    password,
                    newPassword,
                    confirmNewPassword
                }
            })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.hostReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HostInformation);