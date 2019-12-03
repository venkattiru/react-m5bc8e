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
            scAns:''
        }
        this.addDetails = this.addDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleProj = this.handleProj.bind(this);
        this.handleSQ = this.handleSQ.bind(this);
        this.handleSQA = this.handleSQA.bind(this);

    }

    componentWillMount(props){
        

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
              <Input type="text" name="associateID" id="associateID" placeholder="Enter Associate ID" onChange={e  => this.handleChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="associateName" sm={4} className="text-center">Associate Name</Label>
              <Col sm={4}>
              <Input type="text" name="associateName" id="associateName" placeholder="Enter Associate Name" onChange={e => this.handleName} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="gender" sm={4} className="text-center">Gender</Label>
              <Col sm={4}>
              <FormGroup check>
              <Label check>
                <Input type="radio" name="gen" value="Male" onChange={e => this.handlegen}/> Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gen" value="Female" onChange={e => this.handlegen}/> Female
              </Label>
            </FormGroup>
            </Col>
            </FormGroup>
            <FormGroup row> 
              <Label for="Project" sm={4} className="text-center">Project</Label>
              <Col sm={4}>
              <Input type="text" name="Project" id="Project" placeholder="Enter Project Name" onChange={e => this.handleProj}/>
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Label for="scQ" className="text-center" sm={4}>Secret Question</Label>
              <Col sm={4}>
              <Input type="select" name="secretQuestions" id="scQ" placeholder="Enter Project Name" onChange={e => this.handleSQ} >
                  <option value="What is your pet name">What is your pet name</option>
                  <option value="Who is your favourite cricket player">Who is your favourite cricket player</option>
                  <option value="Who is your best friend">Who is your best friend</option>
                  </Input>
                  </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="scA" className="text-center" sm={4}>Secret Answer</Label>
              <Col sm={4}>
              <Input type="text" name="secretAns" id="scA" onChange={e => this.handleSQA}/>
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