import React, { Component } from 'react';
import './dashboardContent.css'
import {connect} from 'react-redux'
import axios from 'axios'
class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    componentDidMount = () => {
        axios.get('/get-salleEsthetique')
            .then((res) => {
                this.props.updateSalleEsthetiqueReducer(res.data)
                return axios.get('/get-salleSport')
            })
            .then((res) => {
                this.props.updateSalleSportReducer(res.data)
                return axios.get('/get-salleFete')
            })
            .then((res) => this.props.updateSalleFeteReducer(res.data))
    }
    render() {
        const totalItem=this.props.salleEsthetiqueReducer.concat(this.props.salleSportReducer.concat(this.props.salleFeteReducer)).length 
        return (
            <div className='dashboardContainer container-fluid'> 
                <div className='row'>
                    <h3 className='col-12'>Dashboard <small>version 19.0.0</small></h3>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 static'>
                        <div className='Visitorcard'>
                            <p className='svg'>
                                <i class="fa fa-user"></i>
                            </p>
                            <h2>5760</h2>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6  static'>
                        <div className='UserCard'>
                            <p className='svg'>
                                <i class="fa fa-users"></i>
                            </p>
                            <h2>1233</h2>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 static'>
                        <div className='Stars'>
                            <p className='svg'>
                                <i class="fa fa-star"></i>
                            </p>
                            <h2>9622</h2> 
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6  static'>
                        <div className='SalleNumber'>
                            <p className='svg'>
                               <i class="fa fa-plus-square"></i>
                            </p>
                            <h2>{totalItem}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        salleEsthetiqueReducer:state.salleEsthetiqueReducer,
        salleSportReducer:state.salleSportReducer,
        salleFeteReducer:state.salleFeteReducer
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        updateSalleEsthetiqueReducer: init => {
            dispatch({
                type: 'UPDATE_SALLE_ESTHETIQUE',
                init
            })
        },
        updateSalleFeteReducer: allSalle => {
            dispatch({
                type: 'UPDATE_SALLE_FETE',
                allSalle
            })
        },
        updateSalleSportReducer: init => {
            dispatch({
                type: 'UPDATE_SALLE_SPORT',
                init
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DashboardContent);