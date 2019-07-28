import React, { Component } from 'react';
import './notificationMessageDropDown.css'
import {connect} from 'react-redux'
class NotificationMessageDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div>
                {this.props.isNotificationMessageOpen===true?<div className="box1" id='notificationMessage'>
                    <div className="notifications1">
                        <span>
                            <i className="fa fa-paper-plane" id="shownonclickevent"/>
                            <span className="num"> Message : </span>
                            <span className="num">{this.props.messageReducer.length}</span>
                        </span>
                        <ul  className='scrollbar' id='style-1'>
                        <div className='force-overflow'>    
                        {this.props.messageReducer.map(el=><li key={el._id}className="icon">
                            <p className="text">email:{el.email}</p>
                        </li>)}
                        </div>
                        </ul>
                    </div>
                </div>:''}
                
                
            </div>
         );
    }
}
const mapStateToProps=state=>{
    return{
        messageReducer:state.messageReducer
        }
} 
export default connect(mapStateToProps,null)(NotificationMessageDropDown);