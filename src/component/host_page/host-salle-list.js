import React, { Component } from 'react'
import { connect } from 'react-redux'
import HostNavBar from './hostNavBar2.js'
import ItemSalleList from './item-salle-list-host.js'
class HostSalleList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const hostSalleFete = this.props.salleFete.filter(el => el.idUser === this.props.user[0]._id)
        const hostSalleSport = this.props.salleSport.filter(el => el.idUser === this.props.user[0]._id)
        const hostSalleEsthetique = this.props.salleEsthetique.filter(el => el.idUser === this.props.user[0]._id)
        const allHostSalle = hostSalleFete.concat(hostSalleSport, hostSalleEsthetique)
        console.log(allHostSalle)
        return (
            <div>
                <HostNavBar />
                <div className='host-salle-list-main container'>
                    <div className='row' style={{ marginTop: '100px' }}>
                        {
                            allHostSalle.map((el, index) => <ItemSalleList key={index} id={this.props.user[0]._id} name={el.salleName} img={el.img} categorie={el.category}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.hostReducer,
        salleFete: state.salleFeteReducer,
        salleSport: state.salleSportReducer,
        salleEsthetique: state.salleEsthetiqueReducer
    }
}
export default connect(mapStateToProps, null)(HostSalleList);