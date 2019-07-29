import React, {Component} from 'react';
import NavBar from '../navBar';
import Footer from '../footer';
import {connect} from 'react-redux'




class SallePlus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <NavBar/>
                
                <div className="salle_name">
                <span>{this.props.salleSportReducer.filter(el =>el.id===this.props.id)[0].salleName}</span>
                
                </div>
                
                
                
                <Footer/>
            </div>
          );
    }
}

const mapStateToProps=(state)=>{
    return{
        salleSportReducer:state.salleSportReducer
}
}

 
export default connect(mapStateToProps)(SallePlus);