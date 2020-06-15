
import React, { Component } from "react";
import logo from '../images/logo.svg';

class Footer extends Component {
    constructor(props){
        super(props);
    }


    render(){
        
        return <>
        
        <footer className="footer-bs mt-4">
        <div className="row">
          <div className="col-md-4 footer-brand animated fadeInLeft">
               <a className="" href="/" ><img src={logo} width = "15%"  alt="Icons"/>
   <span className = "brandname">Learny<span className="slash">.</span></span></a> 


                <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                <p>© 2020 Learny, All rights reserved</p>
            </div>
          <div className="col-md-2 footer-nav animated fadeInUp">
              <h4>Menu —</h4>
              <div className="col-md-12">
                    <ul className="pages">
                        <li><a href="#">College</a></li>
                        <li><a href="#">Universities</a></li>
                        <li><a href="#">School</a></li>
                        <li><a href="#">Coaching</a></li>
                        <li><a href="#">Institutes</a></li>
                    </ul>
                </div>

            </div>
          <div className="col-md-3 footer-social animated fadeInDown">
              <h4>Us</h4>
              <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms and Condtions</a></li>
                </ul>
            </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
              <h4>Newsletter</h4>
                <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
               
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for..."/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                
            </div>
        </div>
    </footer>
   
        </>
    }
}

export default Footer;
