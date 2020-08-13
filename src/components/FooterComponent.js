
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Footer.css';
class Footer extends Component
 {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div className="footer">
        <div className="container ">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                    Plot No. 7, Jubilee Enclave,<br />
		            Opp. Hitex Entrance,Hitech City  <br />
		              Hyderabad,India<br />
		              <i className="fa fa-envelope fa-lg"></i> <a href="mailto:info@wavelabs.ai">
                      Email: info@wavelabs.ai</a>
                    </address>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Wavelabs.ai</p>
                </div>
            </div>
        </div>
    </div>
    
    )
    }
}

export default Footer;