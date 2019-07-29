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
        this.totalPage=1
    }
    handleClick=(e)=> {
        this.setState({
          currentPage: Number(e.target.id)
        });
        console.log(e.target.id)

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
        const {currentPage,dataDisplayedPerPage}=this.state; 
        const indexOfLastData=currentPage*dataDisplayedPerPage; 
        const indexOfFirstData=indexOfLastData-dataDisplayedPerPage;
        const currentDatas=this.props.salleFete.slice(indexOfFirstData,indexOfLastData); 
        const renderData=currentDatas.map(el=><div key={el._id} className='col-sm-6 col-md-4'>                    
        <SalleItem  _id={el._id} salleName={el.salleName} img={el.img} location={el.location}/>
        </div>)
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.salleFete.length / dataDisplayedPerPage); i++) {
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
const mapStateToProps = (state) => {
    return {
        salleFete: state.salleFeteReducer
    }
}
export default connect(mapStateToProps, null)(ListSalleFete);