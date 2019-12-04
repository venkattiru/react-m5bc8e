import React from 'react';
import { Table,Button } from 'reactstrap';
import axios from 'axios';
import Header from '../../Header/Header';
import {connect} from 'react-redux';

class ViewEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            emp :{}
        }
    }
    
componentWillMount(){
    this.viewEmp();
}

viewEmp = () =>{
  axios.get(`http://localhost:8020/viewEmps`,{})
    .then(res => {
        debugger;
      console.log(res.data);
      const data = res.data
     this.setState({emp:data});
     this.renderTableHeader();
     this.renderTableData();
    })
}
getEmp =(ev) =>{
  const id= ev.target.parentElement.parentElement.children[0].textContent;
  axios.get(`http://localhost:8020/getEmp/${id}`)
    .then(res => {
        debugger;
      console.log(res.data);
      const data = res.data;
      this.props.history.push('/addemp',{data});
    })
}
delEmp = (ev) => {
  const id= ev.target.parentElement.parentElement.children[0].textContent;
  axios.delete(`http://localhost:8020/delEmp/${id}`)
    .then(res => {
        debugger;
      console.log(res.data);
      this.viewEmp();
    })
}
    renderTableHeader() {
        if(this.state.emp.length >1 ){
        let header = Object.keys(this.state.emp[0])
        return header.map((key, index) => {
            if(key !== "SQ" && key !== "scAns" && key !== "sq" && key !== "project"){
           return(
                  <th key={index}>{key.toUpperCase()}</th>
           ) 
            }
        })    
    }else{
        return <th>No data</th>
    }
     }

     renderTableData() {
         if(this.state.emp.length >1 && this.props.role == 'Admin'){
        return this.state.emp.map((em, index) => {
           const { id, name, project, selgen } = em //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{project}</td>
                 <td>{selgen}</td>
                 <td><Button color="warning" onClick={(e)=> this.getEmp(e)}>Update</Button></td>
                 <td><Button color="danger" onClick={(e) =>this.delEmp(e)}>Delete</Button></td>
              </tr>
           )
        })
    }else if(this.state.emp.length >1 && this.props.role == 'User'){
      return this.state.emp.map((em, index) => {
           const { id, name, project, selgen } = em //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{project}</td>
                 <td>{selgen}</td>
                 
              </tr>
           )
        })
    }
     }

     render() {
        return (
            <div>
                <Header />           
          {this.props.role == 'Admin' ? <div className="container">
               
              <h1 id='title' className="text-center"> View Employee</h1>
              <Table responsive bordered hover>
                  <thead>
                  <tr>{this.renderTableHeader()}
                  <th>Update</th>
                  <th>Delete</th>
                  </tr>
                  </thead>
                 <tbody>
                    
                    {this.renderTableData()}
                 </tbody>
              </Table>
           </div>
           : <div className="container">
               
              <h1 id='title' className="text-center"> View Employee</h1>
              <Table responsive bordered hover>
                  <thead>
                  <tr>{this.renderTableHeader()}
                  
                  </tr>
                  </thead>
                 <tbody>
                    
                    {this.renderTableData()}
                 </tbody>
              </Table>
           </div>}
           </div>
        )
     }
}


const mapStateToProps = (state) => {
    return {
       user: state.user,
       role:state.role
    }
 }

export default connect(mapStateToProps) (ViewEmployee);

