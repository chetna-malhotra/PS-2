import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
}
render(){
    return(
    <div>
    <div>
    <Header/>
    </div>
    <div>
    <Switch>
    <Route path='/home' component={()=><HomePage/>} />
    </Switch>
    <Footer/>
    </div>
    </div>
    );
}
}
export default Main;