import React, { Component } from 'react';
import HostNavBar from './hostNavBar2';
import './hostInformation.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
                                    <b>Nom complet</b>
                                </div>
                                <input className='personal-information-input' type='text' required value={this.state.fullName} onChange={(e) => {
                                    this.setState({ fullName: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>Nom d'utilisateur</b>
                                </div>
                                <input className='personal-information-input' type='text' required value={this.state.userName} onChange={(e) => {
                                    this.setState({ userName: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>Adresse email</b>
                                </div>
                                <input className='personal-information-input' type='email' required value={this.state.email} onChange={(e) => {
                                    this.setState({ email: e.target.value })
                                }} />
                            </div>
                        </div >
                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <div>
                                    <b>Mot de passe actuel</b>
                                </div>
                                <input className='personal-information-input' type='text' required onChange={(e) => {
                                    this.setState({ password: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>Nouveau mot de passe</b>
                                </div>
                                <input className='personal-information-input' type='text' onChange={(e) => {
                                    this.setState({ newPassword: e.target.value })
                                }} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <b>Confirmez nouveau mot de passe</b>
                                </div>
                                <input className='personal-information-input' type='text' onChange={(e) => {
                                    this.setState({ confirmNewPassword: e.target.value })
                                }} />
                            </div>

                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <button className='btn personal-information-btn' type='submit'
                                onClick={() => {
                                    this.props.editInformation(this.state.fullName, this.state.userName, this.state.email, this.state.password, this.state.newPassword, this.state.confirmNewPassword)
                                }}
                            >
                                Submit
                            </button>
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