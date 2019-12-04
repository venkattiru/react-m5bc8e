import React from 'react';
import axios from 'axios';

import {setuser,setrole} from '../actions/index';
import {connect} from 'react-redux'


import { Button,FormGroup, Label, Input, Col,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Login.css';

class Login extends React.Component{

constructor(props){
    super(props);
    this.state ={
        newUsr:'',
        newPass:'',
        role:'Admin',
        modal:false,
        showinvalid:false
    }
    this.handleChangeuser = this.handleChangeuser.bind(this);
    this.handleChnPass = this.handleChnPass.bind(this);
    this.loginAction = this.loginAction.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleNewUsr = this.handleNewUsr.bind(this);
    this.handleNewPass = this.handleNewPass.bind(this);
    this.addUsr = this.addUsr.bind(this);
    this.handlerole = this.handlerole.bind(this);
    this.invusr = this.invusr.bind(this);
    
}

addUsr =() =>{
    const {newUsr,newPass,role} = this.state;
    axios.post(`http://localhost:8020/addUser`,{newUsr,newPass,role})
    .then(res =>{
console.log(res);

    })
}
toggle =() => this.setState({modal:!this.state.modal});
handleChangeuser =(event) =>{
    this.setState({
        newUsr:event.target.value
    })
    
}
handleChnPass = (event) =>{
    this.setState({
        newPass:event.target.value
    })
}
handleNewUsr = (event) =>{
    this.setState({
        newUsr:event.target.value
    })
}

handleNewPass = (event) =>{
    this.setState({
        newPass:event.target.value
    })
}
handlerole =(event) =>{
    this.setState({
        role:event.target.value
    })
}
invusr =() =>{
    this.setState({
        showinvalid: !this.state.showinvalid
    })
}
loginAction =() =>{
    const {newUsr,newPass} = this.state;
    axios.post(`http://localhost:8020/Login`,{newUsr,newPass})
    .then(res =>{
console.log(res);
if(res.data === "Admin"){
    this.props.history.push('/addemp');
    this.props.setuser(this.state.newUsr);
    this.props.setrole(res.data);
}else if(res.data === "user"){
  this.props.history.push('/viewemp');
    this.props.setuser(this.state.newUsr);
    this.props.setrole(res.data);
}
else{
    this.invusr();
}
    })
}
 

  

render(){
    return(
    <div className="loginDiv" >
            
                <h3 className="text-center">Login</h3>
                <FormGroup row>
                <Label for="userId" sm={4}  className="text-center">Username</Label>
        <Col sm={4}>
        <Input type="text" name="username" id="userId" placeholder="Enter username" onChange={e  => this.handleChangeuser(e)}/>
        </Col>
        {this.state.showinvalid && <Label sm={4} className="text-center invalidusr">Invalid user</Label>}
                </FormGroup>
                <FormGroup row>
                <Label for="pass" sm={4}  className="text-center">Password</Label>
        <Col sm={4}>
        <Input type="password" name="password" id="pass" placeholder="Enter password" onChange={e  => this.handleChnPass(e)}/>
        </Col>
                </FormGroup>
                <div className="row">
                    <div className="col text-center">
                    <Button color="primary" onClick={this.loginAction}>Click here</Button>
                    </div>
                    
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col text-center">
                    <Button color="warning" onClick={this.toggle}>New User</Button>
                    </div> 
                </div>   
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle} >Sign up</ModalHeader>
        <ModalBody>
        <FormGroup row>
                <Label for="newuser" sm={4}  className="text-center">Username</Label>
        <Col sm={6}>
        <Input type="text" name="newusername" id="newuser" placeholder="Enter username" onChange={e  => this.handleNewUsr(e)}/>
        </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="newpass" sm={4}  className="text-center">password</Label>
        <Col sm={6}>
        <Input type="password" name="newpass" id="newpass" placeholder="Enter password" onChange={e  => this.handleNewPass(e)}/>
        </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="newpasscnf" sm={4}  className="text-center">Confirm password</Label>
        <Col sm={6}>
        <Input type="password" name="newpassc" id="newpasscnf" placeholder="confirm password" />
        </Col>
                </FormGroup> 
                <FormGroup row>
        <Label for="role" sm={4} className="text-center">Role</Label>
        <Col sm={4}>
        <FormGroup check>
        <Label check>
          <Input type="radio" name="Role" value="Admin" onChange={e => this.handlerole(e)}/> Admin
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="Role" value="User" defaultChecked onChange={e => this.handlerole(e)}/> User
        </Label>
      </FormGroup>
      </Col>
      </FormGroup>
                
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addUsr}>Submit</Button>
          <Button color="danger" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> 
        </div>
       
    )
    
}

}
const mapStateToProps = (state) => {
    return {
       user: state.user
    }
 }

 const mapDispatchToprops = (dispatch) => {
    return {
        setuser : (user) => {dispatch(setuser(user))},
        setrole :(role) => {dispatch(setrole(role))}
    }
 }

export default  connect(mapStateToProps,mapDispatchToprops) (Login);