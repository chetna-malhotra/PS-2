import React,{Component} from 'react';
import { Jumbotron,Button} from 'reactstrap';
import '../styles/home.css'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Form, FormGroup,Label,Input,FormFeedback} from 'reactstrap';

class HomePage extends Component{
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
      render(){
          return(
            <div className='jumbot'>
            <Jumbotron className="">
              <h1 className="display-3">Welcome to Wavelabs.ai</h1>
              <p className="lead">Login to get started.</p>
              <hr className="my-2" />
              <p>Technology has been at the forefront of industry and business transformation over the last two decades. At Wavelabs, we have the Vision to foresee these rapid evolutions in technology, Agility to proactively invest in new competencies and Customer Centricity to help accelerate the adoption of these new technologies.
                We are an AI-First, new-age Technology company for the Digital, Cognitive and Industry 4.0 Era.
                Come, reimagine the future with us.</p>
                <p>While technologies continue to evolve, the end goal remains the same for us – adapt and implement the best-fit solution that will drive greater efficiencies, improve user-experiences and solve real world business challenges.

We continuously invest in building deep competencies in these practices to help you realize your vision for the future.

</p>
              <p className="lead">
              <Button outline onClick={this.toggleModal} className="button">
                            <span className="fa"></span>Login Now!
                </Button>
              </p>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                <ModalHeader  toggle={this.toggleModal}>

                Login 

                </ModalHeader>
                <ModalBody>
                <Form onSubmit={this.handleLogin}>
                <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" 
                innerRef={(input)=>this.username=input}/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" innerRef={(input)=>this.password=input}/>
                </FormGroup>
                <FormGroup check>
                <Label check>
                <Input type="checkbox" id="remember" innerRef={(input)=>this.remember=input}/>
                Remember Me
                </Label>
                </FormGroup>
                <Button type='submit' value='submit' color='primary' className="justify-content-center">
                    <span className="justify-content-center">Login</span></Button>
                </Form>
                </ModalBody>
                </Modal>
                        </div>
                    
                        );
                    }
                }
export default HomePage;