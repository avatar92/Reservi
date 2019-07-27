import React, { Component } from 'react';
import { connect } from 'react-redux';
import SalleItem from './salleItem'
class ListSalleFete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            dataDisplayedPerPage: 9
        }
    }
    handleClick=(e)=> {
        this.setState({
          currentPage: Number(e.target.id)
        });
        console.log(e.target.id)

      }
    render() {
        const {currentPage,dataDisplayedPerPage}=this.state; 
        const indexOfLastData=currentPage*dataDisplayedPerPage; 
        const indexOfFirstData=indexOfLastData-dataDisplayedPerPage;
        const currentDatas=this.props.salleFete.slice(indexOfFirstData,indexOfLastData); 
        const renderData=currentDatas.map(el=><div key={el._id} className='col-sm-6 col-md-4'>                    
        <SalleItem  name={el.name} img={el.img} ville={el.ville}/>
        </div>)
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.salleFete.length / dataDisplayedPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li className='PaginationNumber'
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
          }); 
        return (
            <div className='container SalleItemContainer'>
                <div className='row' >
                    {renderData}
                </div>
                <div className="PagesNumbers">
                    {renderPageNumbers}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        salleFete: state.salleFeteReducer
    }
}
export default connect(mapStateToProps, null)(ListSalleFete);