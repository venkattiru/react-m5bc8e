import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faBullseye,faPowerOff } from "@fortawesome/free-solid-svg-icons";


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
          this.logout = this.logout.bind(this);
      }
 
 componentWillMount(props){
    
 }
   
toggle = () => this.setState({isOpen : !this.state.isOpen});
logout = ()=> {
  this.props.history.push('/login');
}

render(){
    let {user} = this.props;
    console.log(user);
  return(
      <div >
     
        <header className="col-md-12 headerStyle" >Welcome {user}
        <FontAwesomeIcon icon={faPowerOff} style={{float:'right',marginRight:'10',cursor:'pointer'}} onClick={this.logout}/>
        <FontAwesomeIcon icon={faUser} style={{float:'right',marginRight:'10',cursor:'pointer'}}/>
        
       
        </header>
      
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
            
            <DropdownItem tag={Link} to="/viewemp">
              View Employee List
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink  tag={Link} to='/organize'>Organization</NavLink>
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
       user: state.user,
       role:state.role
    }
 }

 

export default  connect(mapStateToProps)(Header);