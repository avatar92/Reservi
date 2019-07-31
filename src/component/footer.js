import React, {Component} from 'react';
import './footer.css'
import {connect} from 'react-redux'
import axios from 'axios'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailInput:'',
            messageInput:''
        }
    }
    sendmessage=(email,message)=>
    {
      axios.post('/add-message',{email,message})
       .then(()=>this.props.sendmessageReducer(email,message))
       .catch((err)=>alert(err)) 
    }
    handleemailchange=(e)=>{
        this.setState({emailInput:e.target.value})
    }
    handlemessagechange=(e)=>{
        this.setState({messageInput:e.target.value})
    }
    render() { 
        return (
            <div id='footerContainer'>
                <footer className="footer-distributed">

                    <div className="footer-left">

                       

                        <span>Contact Us</span>
                        

                        <form className="contact-us">
                            <p>Email:</p>
                            <input type="email" placeholder="Enter email" id='emailInput' className="email-input" onChange={this.handleemailchange}></input><br></br>
                            <p>Message</p>
                            <textarea type="text" placeholder="Message" id='messageInput' className="message-input" onChange={this.handlemessagechange}></textarea><br></br>
                            <button type="submit"  onClick={(e)=>{this.sendmessage(this.state.emailInput,this.state.messageInput)
                                                                document.getElementById('emailInput').value=''
                                                                document.getElementById('messageInput').value=''
                                                                // alert('your message is sent we will reply soon')
                                                                e.preventDefault()}}>Send</button>
                        </form>

                        
                    </div>

                    <div className="footer-center">
                        <span>Get in touch</span>
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p>GOMYCODE  Sousse, Tunisie</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>(+216) 21 82 54 52</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="/">FullStackJS7@gomycode.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About Us</span>
                            We are a group of three young developpers who trying to make a cool website.We hope that you like what you see.<br></br>Find us on social media:
                        
                        </p>

                        <div className="footer-icons">

                            <a href="/"><i className="fa fa-facebook"></i></a>
                            <a href="/"><i className="fa fa-linkedin"></i></a>
                            <a href="/"><i className="fa fa-github"></i></a>

                        </div>

                    </div>
                    
                    <div className="copyrights">
                         <h3>Reservi<span>.TN</span></h3>
                         <p>Copyright &copy; 2019</p>
                    </div>
                </footer>
            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{ 
        sendmessageReducer: (x,y) => {
            dispatch({
                type: 'SEND_MESSAGE',
                newmessage:{
                    email:x,
                    message:y,
                    // _id:Math.random()
                }
            })
        }
    }
} 
export default connect(null,mapDispatchToProps)(Footer);