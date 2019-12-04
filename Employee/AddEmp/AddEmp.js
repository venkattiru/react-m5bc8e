import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import Header from '../../Header/Header';
import './AddEmp.css';
import { connect } from 'react-redux';


class AddEmp extends React.Component{
    

    constructor(props){
        super(props);
        this.state ={
            subBt :false,
            id:'',
            name:'',
            Project:'',
            selgen:'',
            SQ:'what is your pet name',
            scAns:'',
            idDis :false
        }
        this.addDetails = this.addDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleProj = this.handleProj.bind(this);
        this.handleSQ = this.handleSQ.bind(this);
        this.handleSQA = this.handleSQA.bind(this);

    }

    componentWillMount(props){
        
        if(this.props.location.state != undefined){
          const {id,name,Project,SQ,selgen,scAns} = this.props.location.state.data;
          this.setState({
            id:id,
            name:name,
            Project:Project,
            selgen:selgen,
            SQ:SQ,
            scAns:scAns,
            idDis:true
          })
        }

    }

    handleChange =(event) =>{
        this.setState({
            id:event.target.value
        })
    }
    handleName =(event) =>{
        this.setState({
            name:event.target.value

        })
    }
    handleProj =(event)=>{
        this.setState({
            Project:event.target.value
        })
    }

    handleSQ = (event) =>{
        this.setState({
            SQ:event.target.value
        })
    }
    handleSQA =(e) =>{
        this.setState({
            scAns:e.target.value
        })
    }
    handlegen =(ev)=>{
        this.setState({
            selgen:ev.target.value
        })
    }
    addDetails =()=>{
      
        const {id,name,Project,selgen,SQ,scAns} = this.state;
        axios.post(`http://localhost:8020/addEmp`,{id,name,Project,selgen,SQ,scAns})
        .then(res => {
          console.log(res.data);
         
        })
      
    }
    render(){
        return(
            <div>
            
            <Header />
            
      <Form className="container formsStyle">
      <FormGroup row>
              <Label for="associateID" sm={4}  className="text-center">Associate ID</Label>
              <Col sm={4}>
              <Input type="text" name="associateID" id="associateID" placeholder="Enter Associate ID" value={this.state.id} onChange={e  => this.handleChange} disabled={this.state.idDis}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="associateName" sm={4} className="text-center">Associate Name</Label>
              <Col sm={4}>
              <Input type="text" name="associateName" id="associateName" placeholder="Enter Associate Name" value ={this.state.name}onChange={e => this.handleName} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="gender" sm={4} className="text-center">Gender</Label>
              <Col sm={4}>
              <FormGroup check>
              <Label check>
                <Input type="radio" name="gen" value="Male" checked ={this.state.selgen == 'Male' ?true:false} onChange={e => this.handlegen}/> Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gen" value="Female" checked ={this.state.selgen == 'Female' ?true:false} onChange={e => this.handlegen}/> Female
              </Label>
            </FormGroup>
            </Col>
            </FormGroup>
            <FormGroup row> 
              <Label for="Project" sm={4} className="text-center">Project</Label>
              <Col sm={4}>
              <Input type="text" name="Project" id="Project" placeholder="Enter Project Name" value={this.state.Project} onChange={e => this.handleProj}/>
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Label for="scQ" className="text-center" sm={4}>Secret Question</Label>
              <Col sm={4}>
              <Input type="select" name="secretQuestions" id="scQ" placeholder="Enter Project Name" value ={this.state.SQ} onChange={e => this.handleSQ} >
                  <option value="What is your pet name">What is your pet name</option>
                  <option value="Who is your favourite cricket player">Who is your favourite cricket player</option>
                  <option value="Who is your best friend">Who is your best friend</option>
                  </Input>
                  </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="scA" className="text-center" sm={4}>Secret Answer</Label>
              <Col sm={4}>
              <Input type="text" name="secretAns" id="scA" value={this.state.scAns} onChange={e => this.handleSQA}/>
              </Col>
            </FormGroup>
            <div className="row">
      <div className="col text-center">
      <Button id="addEmpbt" color="warning" onClick={() => this.addDetails}>Submit</Button>
      </div>   
            </div>
            
      </Form>
      </div>
          );
    }
}

    
export default  (AddEmp);