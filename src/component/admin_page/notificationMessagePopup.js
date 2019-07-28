import React, { Component } from 'react';
import './notificationMessagePopup.css'
class NotificationMessagePopup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        console.log(this.props.previousMessage)
        return ( 
            <div>
            {this.props.totalmessage===this.props.previousMessage ?'': <div className='MessagePopupContainer'> 
                    <span className='Popup' >{this.props.totalmessage-this.props.previousMessage}</span>
            </div>}
            </div>
        );
    }
}
export default NotificationMessagePopup;