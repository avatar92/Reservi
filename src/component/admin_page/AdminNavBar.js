import React, { Component } from 'react';
import './AdminNavBar.css'
import {Link} from 'react-router-dom'
import NotificationDropDown from './notifcationdropdown.js'
import NotificationMessageDropDown from './notificationMessagedropdown.js'
import NotificationMessagePopup from './notificationMessagePopup.js'
import NotificationPopup from './notificationPopup.js'
import {connect} from 'react-redux'
import axios from 'axios'
class AdminNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen:false ,
            isSideopen:true, 
            isNotificationOpen:false,
            isNotificationMessageOpen:false,
            previousMessage:0  
            
        }
        
    }
    componentDidMount = () => {
        axios.get('/get-message')
            .then((res) => {
                this.props.updateMessageReducer(res.data)
                return axios.get('/get-lastpreviousmessage')
            })
            .then((res)=>{this.props.updatePreviousMessageReducer(res.data.x)
                  console.log('myReSdata',res.data.x)})
    }
    incrementPreviousMessage=(x)=>
    {
      axios.post('/add-previousmessage',{x})
       .then(()=>this.props.incrementPreviousMessageReducer(x))
       .catch((err)=>alert(err)) 
    }
    openSideNav=()=>{
        if (this.state.isSideopen===true)
        {document.getElementById('sideNavigationLink').style.width='250px'}
        else if (this.state.isSideopen===false)
        {document.getElementById('sideNavigationLink').style.width='0'}
    }
    openNotification=()=>{
     this.setState({
                    isNotificationOpen:!this.state.isNotificationOpen,
                    isNotificationMessageOpen:false
                })
    }
    openMessageNotification=()=>{
        this.setState({
                       isNotificationOpen:false,
                       isNotificationMessageOpen:!this.state.isNotificationMessageOpen
                   })
       }
    render() {
        const previousMessage=this.props.previousmessageReducer;
        const totalMessage=this.props.messageReducer.length
        return ( 
            <div className='adminResponsiveTopBar'>
                <div className='admin_page'>Admin Page</div>
                <div className="adminNavgationContainer_lessthen768 container-fluid">
                    <div className="adminnavigationMenu_lessthen768">
                            <span className='adminTogler ' onClick={()=>{this.setState({isSideopen:!this.state.isSideopen})
                                                                        this.openSideNav()}}>
                                <i className="fa fa-bars admintoggle"aria-hidden="true"></i>
                            </span>
                            <div className='navbarRight_less768'>
                                <div className="navigationLinks_less768">
                                        <i class="fa fa-paper-plane notifcationAdmin" onClick={()=>{this.incrementPreviousMessage(totalMessage)
                                                                                                console.log('hello')
                                                                                                this.openMessageNotification()
                                                                                                }}></i>
                                        <i class="fa fa-bell notifcationAdmin" onClick={this.openNotification}></i>
                                </div>
                            </div>
                    </div>
                </div>    
                <div className='sideNavigationLink' id='sideNavigationLink'>
                    <span className='adminProfileContainer'><img className='adminProfile ' src='https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/60413678_2173093146102564_8862264565430222848_n.jpg?_nc_cat=108&_nc_oc=AQmS1Up_nwdXzefEOvNWl6mZQssESWsi75MOaDbNZjkfPYYqnKg1vSVaFd8D8f1BWlc&_nc_ht=scontent.ftun12-1.fna&oh=8043400c3a62efd655d676320f09902a&oe=5DBA0206' alt='admin'></img> Adel Ben Salem</span>
                    <Link className='sideNavLink' to="/"> <i className="fa fa-home admintoggle flexinner"aria-hidden="true"></i><span className='flexinner'>Home</span></Link>
                    <Link className='sideNavLink' to="/admin"> <i className="fa fa-dashboard admintoggle flexinner"aria-hidden="true"></i><span className='flexinner'>Dashboard</span></Link>
                    <Link className='sideNavLink' to="/admin/post"><i class="fa fa-comment flexinner"></i><span className='flexinner'>Posts</span></Link>
                    <Link className='sideNavLink' to="/admin/add_salle"><i class="fa fa-plus-square flexinner"></i><span className='flexinner'>Add Salle</span></Link>
                    <Link className='sideNavLink' href="/admin/Feature"><i class="fa fa-trophy flexinner"></i><span className='flexinner'>new Feature</span></Link>
                    <Link className='sideNavLink' href="/admin/Feature"><i class="fa fa-power-off flexinner"></i><span className='flexinner'>Log out</span></Link>
                </div>
                <div className="adminNavgationContainer container-fluid">
                    <div className="adminnavigationMenu">
                            <span className='adminTogler ' >
                                <i onClick={()=>{
                                        this.setState({isOpen:!this.state.isOpen})
                                        this.props.openClose(this.state.isOpen)}} className="fa fa-bars admintoggle"aria-hidden="true"></i>
                            </span>
                            <div className='navbarRight '>
                            <div className="navigationLinks ">
                                    <i class="fa fa-paper-plane notifcationAdmin" onClick={()=>{
                                                                                                this.incrementPreviousMessage(totalMessage)
                                                                                                console.log('hello')
                                                                                                this.openMessageNotification()
                                                                                                }}></i>
                                    <i class="fa fa-bell notifcationAdmin" onClick={this.openNotification}></i>
                            </div>
                            <div className='admin'>                                
                                <span><img className='adminProfile ' src='https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/60413678_2173093146102564_8862264565430222848_n.jpg?_nc_cat=108&_nc_oc=AQmS1Up_nwdXzefEOvNWl6mZQssESWsi75MOaDbNZjkfPYYqnKg1vSVaFd8D8f1BWlc&_nc_ht=scontent.ftun12-1.fna&oh=8043400c3a62efd655d676320f09902a&oe=5DBA0206' alt='admin'></img> Adel Ben Salem</span>
                                <span className='logOut'>Log Out</span>
                            </div>
                            </div>
                    </div>
                </div>
                {/* NotificationDropDown */}
                <NotificationDropDown isNotificationOpen={this.state.isNotificationOpen}/>
                {/* NotificationMessageDropDown*/}
                <NotificationMessageDropDown isNotificationMessageOpen={this.state.isNotificationMessageOpen}/>
                {/* NotificationMessagePopup*/}
                <NotificationMessagePopup totalmessage={totalMessage} previousMessage={previousMessage}/>
                {/* NotificationPopup*/}
                <NotificationPopup />
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        messageReducer:state.messageReducer,
        previousmessageReducer:state.previousmessageReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageReducer: messageTab => {
            dispatch({
                type: 'UPDATE_MESSAGE',
                messageTab
            })
        },
        incrementPreviousMessageReducer:previousMessage=>{
            dispatch({
                type:'INCREMENT_PREVIOUS_MESSAGE',
                previousMessage
            })
        },
        updatePreviousMessageReducer: previousMessage => {
            dispatch({
                type: 'UPDATE_PREVIOUS_MESSAGE',
                previousMessage
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AdminNavBar);