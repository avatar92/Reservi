import React, {Component} from 'react';
import './footer.css';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id='footerContainer'>
                <footer className="footer-distributed">

                    <div className="footer-left">

                       

                        <span>Contact Us</span>
                        

                        <form className="contact-us">
                            <p>Email:</p>
                            <input type="email" placeholder="Enter email" className="email-input"></input><br></br>
                            <p>Message</p>
                            <textarea type="text" placeholder="Message" className="message-input"></textarea><br></br>
                            <button type="submit">Send</button>
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

                            <a href="/"><i class="fa fa-facebook"></i></a>
                            <a href="/"><i class="fa fa-linkedin"></i></a>
                            <a href="/"><i class="fa fa-github"></i></a>

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
 
export default Footer;