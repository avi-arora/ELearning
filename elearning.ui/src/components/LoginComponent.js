import React, {Component} from 'react';
import work from '../images/work.svg';
import facebook from '../images/facebook.svg';
import google from '../images/google.svg';



class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
  
    <div className="Hero1 mb-5 ">
	<div className="HeroText1">
		<div className="HeroContent1"> 
             <h1 >
		 	Login </h1>
		 	<h3> to the worldfull of possiblities.</h3>
		 <div className="getstart1">  
		 <img src={work} width = "60%" height="40%" alt="Icons"/>
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
              <input name="login" id="login" className="btn btn-block login-btn" type="button" value="Login"/>
            </form>
            
          </div>
        </div>
        <div className="col-sm-6 py-4 d-sm-block forgot-block">
        	  <div className="col-sm-8 login-wrapper-reg my-auto">
              <a href="#!" className="badge badge-pill badge-primary">Forgot password?</a>
              <p className="login-wrapper-footer-text">Don't have an account? <a href="#!" className="text-reg">Register here</a></p>
              </div>
              <div className="col-sm-12 login-wrapper-reg-social my-auto">
              <a href="#!" className="forgot-password-link">Or Login Via</a> <br/>
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


export default Login;