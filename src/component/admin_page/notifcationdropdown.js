import React, { Component } from 'react';
import './notificationdropdown.css'

class NotificationDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div>
                {this.props.isNotificationOpen===true ?
                <div className="box" id='notification'>
                    <div className="notifications">
                        <span>
                            <i className="fa fa-bell " id="shownonclickevent"/>
                            <span className="num"> Notifciation : </span>
                            <span className="num">4</span>
                        </span>
                        <ul className='scrollbar' id='style-1'>
                        <li className="icon">
                            <span className="text">Someone put 5 star</span>
                        </li>
                        <li className="icon">
                            <span className="text">Someone put 1 star</span>
                        </li>
                        <li className="icon">
                            <span className="text">Someone put 4 star</span>
                        </li>
                        <li className="icon">
                            <span className="text">Someone put 5 star</span>
                        </li>
                        </ul>
                    </div>
                </div>
                :''}
                </div>
         );
    }
}
 
export default NotificationDropDown;