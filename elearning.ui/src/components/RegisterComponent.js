import React, {Component} from 'react';
import programmer from '../images/programmer.svg';
import facebook from '../images/facebook.svg';
import google from '../images/google.svg';

class Register extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
      
      <div className="SignUp">
  <div className="HeroText1">
    <div className="HeroContent1"> 
             <h1 > Sign Up </h1>
      <h3> to chase the Unseen Opportunities.</h3>
     <div className="getstart2">  
     <img src={programmer} width = "100%" height="40%" alt="Icons"/>
     </div>
    </div>
    
  </div>
  <div className="HeroImg1">
    <div className="row">
        <div className="col-sm-6 login-section-wrapper">
         
          <div className="login-wrapper my-auto">
           
            <form action="#!">
              <div className="form-group  mb-1">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="email@example.com"/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="enter your passsword"/>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="Confirm your passsword"/>
              </div>
              <input name="login" id="login" className="btn btn-block login-btn" type="button" value="Sign Up"/>
            </form>
            
          </div>
        </div>
        <div className="col-sm-6 py-4 d-none d-sm-block forgot-block">
            <div className="col-sm-8 login-wrapper-reg my-auto">
            
              <p className="login-wrapper-footer-text-signup mb-0">Already have an account?  <br/><br/>
               <a href="/login" className="badge badge-pill badge-primary"> Login</a></p>
                
              </div>
              <div className="col-sm-12 login-wrapper-reg-social my-auto">
              <a href="#!" className="forgot-password-link">Or Sign Up via</a> <br/>
               <img src={google} width = "10%" height="15%" alt="Icons"/>
                <img src={facebook} width = "10%" height="15%" alt="Icons"/>
               </div>
        </div>
      </div>

  </div>

</div>


        </>
    }
}


export default Register;