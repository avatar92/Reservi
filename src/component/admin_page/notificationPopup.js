import React, { Component } from 'react';
import './notificationPopup.css'

class NotificationPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='PopupContainer'> 
                <span className='Popup'>1</span>
            </div>
        );
    }
}
 
export default NotificationPopup;