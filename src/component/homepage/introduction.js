import React, { Component } from 'react';
import './introduction.css';
import Typing from 'react-typing-animation';
import { connect } from 'react-redux';
import axios from 'axios'
var bcrypt = require('bcryptjs');
class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            userName: '',
            password: '',
            email: '',
            errormsg: '',
            existEmail:'',
            successmsg:''
        };
    }
   
    shouldComponentUpdate(nextState){
        axios.get('/get-users-email')
        .then((res) => {
            this.setState({existEmail:res.data})
        })
        return true
    }
    addUser = (fullname,username,email,password) => {

        axios.post('/add-user', { fullname,username,email,password })
            .then(() => this.props.createCompte(fullname,username,email,password))
            .catch((err) => alert(err))
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
                                <h2 className="text-center">Créez votre compte</h2>
                                <hr />
                                {this.state.errormsg !== ''
                                    ?
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        {this.state.errormsg}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() =>this.setState({errormsg:''})}>
                                            <span aria-hidden="true">&times;</span>
                                            
                                        </button>
                                    </div>
                                    :
                                    ''
                                }
                                 {this.state.successmsg !== ''
                                    ?
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        {this.state.successmsg}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() =>this.setState({successmsg:''})}>
                                            <span aria-hidden="true">&times;</span>
                                            
                                        </button>
                                    </div>
                                    :
                                    ''
                                }
                            
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Nom complet" required="required" onChange={(e) => this.setState({ fullName: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" required="required" onChange={(e) => this.setState({ email: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Nom d'utilisateur" required="required" onChange={(e) => this.setState({ userName: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Mot de passe" required="required" onChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-style btn-block"
                                        onClick={(e) => {
                                            e.preventDefault()

                                            if (this.state.fullName === '' || this.state.userName === '' || this.state.email === '' || this.state.password === '') {

                                                this.setState({ errormsg: 'Tous les champs sont obligatoires' })
                                            } else if (this.state.existEmail.filter(el => el === this.state.email).length > 0) {
                                                this.setState({ errormsg: 'Vous êtes déjà enregistrer' })
                                            } else if (this.state.password.length < 8) {
                                                this.setState({ errormsg: 'Vous mot de passe doit avoir au moins 8 caractères' })

                                            } else {
                                                this.setState({ successmsg: 'Votre compte sur RESERVI a bien été créé ! connectez vous' })
                                                this.addUser(this.state.fullName,this.state.userName,this.state.email,this.state.password)


                                            }
                                        }}>
                                        Valider
                                         </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.hostReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createCompte: (fullName, userName, email, password) => {
            dispatch({
                type: 'ADD_NEW_USER',
                value: {
                    fullName,
                    email,
                    userName,
                    password
                }
            })
            // bcrypt.genSalt(10, function (err, salt) {
            //     bcrypt.hash(password, salt, function (err, hash) {
            //         if (err) throw err;
            //         password = hash
                  
            //     });
            // });
            

        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Introduction);