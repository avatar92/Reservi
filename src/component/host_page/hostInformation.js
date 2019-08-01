import React, { Component } from 'react';
import HostNavBar from './hostNavBar2';
import './hostInformation.css';
import { connect } from 'react-redux';

class HostInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: this.props.user[0].fullName,
            userName: this.props.user[0].userName,
            email: this.props.user[0].email,
            password: this.props.user[0].password,
            newPassword: '',
            confirmNewPassword: ''
        }
    }
    render() {
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
                            <div className='btn personal-information-btn' type='submit'
                                onClick={() => {
                                    this.props.editInformation(this.props.user[0]._id, this.props.user[0].password, this.state.fullName, this.state.userName, this.state.email, this.state.password, this.state.newPassword, this.state.confirmNewPassword)
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
        editInformation: (id, defaultPass, fullName, userName, email, password, newPassword, confirmNewPassword) => {
            if (newPassword === '' && confirmNewPassword === '') {
                if (password === defaultPass) {
                    dispatch({
                        type: 'EDIT_PERSONAL_INFORMATION',
                        value: {
                            _id:id,
                            fullName:fullName,
                            email:email,
                            userName:userName,
                            password:password,
                        }
                    })
                } else {
                    alert('Mot de passe incorrect')
                }
            }
            else if (newPassword !== '' && confirmNewPassword !== '') {
                if (password === defaultPass) {
                    if (newPassword === confirmNewPassword) {
                        dispatch({
                            type: 'EDIT_PERSONAL_INFORMATION',
                            value: {
                                _id:id,
                                fullName:fullName,
                                email:email,
                                userName:userName,
                                password:newPassword,
                            }
                        })
                    } else {
                        alert("veuillez bien confirmer votre nouveau mot de passe")
                    }
                } else {
                    alert('Mot de passe incorrect')
                }
            } else if (newPassword === '' && confirmNewPassword !== '') {
                alert('veuillez entrer votre nouveau mot de passe avant de le confirmer')
            } else if (newPassword !== '' && confirmNewPassword === '') {
                alert('veuillez confirmer votre nouveau mot de passe')
            }
        }
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.hostReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HostInformation);