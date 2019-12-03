import React from 'react';
import { Table,Button } from 'reactstrap';
import axios from 'axios';
import Header from '../../Header/Header';

class ViewEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            emp :{}
        }
    }
    
componentWillMount(){
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
    renderTableHeader() {
        if(this.state.emp.length >1){
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
         if(this.state.emp.length >1){
        return this.state.emp.map((em, index) => {
           const { id, name, project, selgen } = em //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{project}</td>
                 <td>{selgen}</td>
                 <td><Button color="warning">Update</Button></td>
                 <td><Button color="danger">Delete</Button></td>
              </tr>
           )
        })
    }
     }

     render() {
        return (
            <div>
                <Header />           
           <div className="container">
               
              <h1 id='title' className="text-center"> View Employee</h1>
              <Table responsive bordered hover>
                  <thead>
                  <tr>{this.renderTableHeader()}</tr>
                  </thead>
                 <tbody>
                    
                    {this.renderTableData()}
                 </tbody>
              </Table>
           </div>
           </div>
        )
     }
}


export default ViewEmployee;

