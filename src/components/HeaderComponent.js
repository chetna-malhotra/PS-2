import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Button,Form, FormGroup,Label,Input,FormFeedback} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from'../assets/logo1.png';

 class Header extends Component{

 	constructor(props){
 		super(props);
 		this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
 		this.state={
 			isNavOpen:false,
            isModalOpen:false
 		};
 			
 	}
 	toggleNav(){
 		
 		this.setState({
 			isNavOpen:!(this.state.isNavOpen)
 					});
 	}
    toggleModal(){        
        this.setState({
            isModalOpen:!(this.state.isModalOpen)
                    });
    }
    handleLogin(event){
        this.toggleModal();
        alert("username: " +this.username.value+" Password: "+this.password.value+
            " Remember: "+ this.remember.checked);
        event.preventDefault();
    }
 	render()
 	{
 		return(
 			<React.Fragment>
 				 < Navbar expand="md" className="nav-bar-dark">
     				<div className="container">
     				<NavbarToggler onClick={this.toggleNav} />
     					<NavbarBrand className="mr-auto" href="/"> 
     					<img src={logo} height="30" width="50" alt="logo"/>

     					</NavbarBrand>
     					<Collapse isOpen={this.state.isNavOpen} navbar>
     					<Nav navbar>
     					<NavItem>
     					<NavLink className="nav-link" to="/home">
     					<span className="fa fa-home fa-lg"></span>Home
     					</NavLink>
     					</NavItem>
     					<NavItem>
     					<NavLink className="nav-link" to="/aboutus">
     					<span className="fa fa-info fa-lg"></span>About Us
     					</NavLink>
     					</NavItem>
     					</Nav>
                        <Nav className="ml-auto" navbar>
                       
                        </Nav>
     					</Collapse>
     				</div>
    			 </Navbar> 
    			 <Jumbotron className="jumbo">
    			 <div className="container">
    			 <div className="row row-header">
    			 <div className="col-12 col-sm-6">
    			 	<h1>Wavelabs.ai</h1>
    			 	<p> Digital,Cognitive and Industry 4.0 Era</p>
    			 </div>
    			 </div>
    			 </div>
    			 </Jumbotron>
                 
 			</React.Fragment>
 			);
 	}
 }
 export default Header;