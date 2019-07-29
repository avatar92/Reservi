import React, { Component } from 'react';
import './salleDescription.css'
import {connect} from 'react-redux'

class SalleDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalData:this.props.salleEsthetiqueReducer.concat(this.props.salleSportReducer.concat(this.props.salleFeteReducer)), 
            _id:Number(this.props._id),
        }
        this.el=this.state.totalData.filter(el=>el._id===this.state._id)
    }
    render() { 
        console.log('myID',this.state._id)
        console.log('myEL',this.el)
        return ( 
            <div className="salle-fete-image-container">
                    <h1 style={{ color: '#00b39b', textAlign: 'center' }}>{this.el[0].salleName}</h1>
                    <div className="salle-fete-container">
                        <div className="salle-fete-box">
                            <img src={this.el[0].img}  alt='salleimage 1'/>
                        </div>
                        <div className="salle-fete-box">
                            <img src={this.el[0].img1} alt='salleimage 2'/>
                        </div>
                        <div className="salle-fete-box">
                            <img src={this.el[0].img2} alt='salleimage 3'/>
                        </div>
                        <div className="salle-fete-box">
                            <img src={this.el[0].img3} alt='salleimage 4'/>
                        </div>
                    </div>                
                <div className='container SalleDescription'>
                    <div>
                        <h3 style={{ color: '#3d83df' }}>Description</h3>
                        <p>
                            {this.el[0].description}
                        </p>
                        <p><b>Capacité: </b>{this.el[0].description}</p>
                        <p><b>Prix: </b>{this.el[0].prix}</p>
                        <p><b>Ville: </b>{this.el[0].telfix}</p>
                    </div>
                </div>
                </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return {
        salleEsthetiqueReducer:state.salleEsthetiqueReducer,
        salleSportReducer:state.salleSportReducer,
        salleFeteReducer:state.salleFeteReducer
    }
}
export default connect(mapStateToProps,null)(SalleDescription);