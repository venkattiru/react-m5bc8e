import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
import './Header.css';
  class Header extends React.Component
  {
      constructor(props){
          super(props);
          this.state ={
              name:"user",
              isOpen :false
          }
          this.toggle =this.toggle.bind(this);
      }
 
 componentWillMount(props){
    
 }
   
 toggle = () => this.setState({isOpen : !this.state.isOpen});


render(){
    let {user} = this.props;
    console.log(user);
  return(
      <div >
     
        <header className="col-md-12 headerStyle" >Welcome {user}</header>
      
    <div>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">React</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Employee
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag={Link} to="/addemp">
              Add Employee
            </DropdownItem>
            <DropdownItem tag={Link} to="/uptemp">
              Update Employee
            </DropdownItem>
            <DropdownItem tag={Link} to="/delemp">
              Delete a Employee
            </DropdownItem>
            <DropdownItem tag={Link} to="/viewemp">
              View Employee List
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink  href='/organize'>Organization</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>

  </div> 
  )
  }
  }  
const mapStateToProps = (state) => {
    return {
       user: state.user
    }
 }

 

export default  connect(mapStateToProps)(Header);