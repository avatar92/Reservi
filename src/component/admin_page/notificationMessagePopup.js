import React, { Component } from 'react';
import './notificationMessagePopup.css'
import {connect} from 'react-redux'
class NotificationMessagePopup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newMessage:0, 
            previousMessage:0,
            
        }
    }
    render() { 
        const PopupTab=this.props.messageReducer; 
        let totalMessage=0; 
        for (let i=0;i<PopupTab.length;i++){
            totalMessage++
        }
        console.log(totalMessage-this.state.previousMessage)
        return ( 
            <div>
            {totalMessage===this.state.previousMessage ?'': <div className='MessagePopupContainer' onClick={()=>this.setState({previousMessage:totalMessage})}> 
                    <span className='Popup' >{totalMessage-this.state.previousMessage}</span>
            </div>}
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        messageReducer:state.messageReducer
    }
}
export default connect(mapStateToProps,null)(NotificationMessagePopup);