import React, { Component } from 'react';
import './adminPostSearchBar.css'
class AdminPostSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            adminInput:'',
        }
    }
    render() { 
        return ( 
            <div className="searchBox">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for Host Post" onChange={(event)=>this.setState({adminInput:event.target.value})} />
                    <div>
                    <button className="btn bgColor" type="button" onClick={()=>this.props.adminSearch(this.state.adminInput)} >
                        <i className="fa fa-search searchColor" />
                    </button>
                    </div>
                </div>
            </div>

        );
    }
}

 
export default AdminPostSearchBar;