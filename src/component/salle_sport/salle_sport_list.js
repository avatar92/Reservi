import React, { Component } from 'react';
import SalleItem from './salle_sport_item'
import './sallesport.css'
import {connect} from 'react-redux'

class SalleList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            currentPage:1, 
            dataDisplayedPerPage:9
        }
        this.totalPage=1; 
    }
    
    handleClick=(event)=> {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      addPageNumber=()=>{
        if (this.state.currentPage<this.totalPage)
        {this.setState({
            currentPage:this.state.currentPage+1
        })}
    }
    losePageNumber=()=>{
        if (this.state.currentPage>=2)
        {this.setState({
            currentPage:this.state.currentPage-1
        })}
    }    
    changePage=(x)=> {
        this.setState({
          currentPage: x+1,
        }); 
        // document.getElementsByClassName("PaginationNumberadmin")[x].style.backgroundColor = "red";
    }
    render() {
            // console.log('myDataState:',this.state.data,'\n','myProps',this.props.salleEsthetiqueReducer)
            const {currentPage,dataDisplayedPerPage}=this.state; 
            const indexOfLastData=currentPage*dataDisplayedPerPage; 
            const indexOfFirstData=indexOfLastData-dataDisplayedPerPage;
            const currentDatas=this.props.salleSportReducer.slice(indexOfFirstData,indexOfLastData); 
            const renderData=currentDatas.map(el=><div key={el._id} className='col-lg-4 col-md-4 col-sm-6'>                    
            <SalleItem _id={el._id} salleName={el.salleName} img={el.img} location={el.location}/>
            </div>)
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.salleSportReducer.length / dataDisplayedPerPage); i++) {
              pageNumbers.push(i);
            }
            this.totalPage=pageNumbers.length
            const renderPageNumbers = pageNumbers.map((number,index) =><div>
                {this.state.currentPage===index+1?<span 
                    style={{"background-color":"#00b39b"}}
                    className='PaginationNumberadmin'
                    key={index}
                    onClick={()=>this.changePage(index)}>
                    {number}
                </span>:
                <span className='PaginationNumberadmin'
                key={index}
                onClick={()=>this.changePage(index)}>
                {number}
                </span>
                }</div>
            ); 
            return ( 
            <div className='container SalleItemContainer'>
                <div className='row'>
                    <div className="AdminPagesNumbers col-12">
                        <span onClick={()=>this.losePageNumber()}>&laquo;</span>
                            {renderPageNumbers}
                        <span onClick={()=>this.addPageNumber()}>&raquo;</span>
                    </div>
                </div>
                <div className='row' >
                    {renderData}
                </div>
                
            </div>
        );
    }
}
const mapStateToProps=(state)=>

{
    return {
        salleSportReducer:state.salleSportReducer
    }
}  
export default connect(mapStateToProps,null)(SalleList);