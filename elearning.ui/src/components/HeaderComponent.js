import React, { Component } from "react"
import logo from '../images/logo.svg';
import search from '../images/search.svg';

class Header extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
                    <>


<div className="Header" >
  <div className="nav">
    <div className = "navbar-branding">
     <div className="logo">
     <a className="" href="/" >
	 <img src={logo}  width = "15%"  alt="Icons" />
	 <span className = "brandname">Learny<span className="slash">.</span></span></a> 
     </div>
   </div>
   <div className="topnav"> 
    <div className="navlink"> 
    <a href="home">About us</a>
    <a href="login" >Login</a>
    <a href="register">Register</a>
   </div>
   <div className="navsearch"> 
   <div className="searchBox">
            <input className="searchInput"type="text" name="" placeholder="Search"/>
            <button className="searchButton" href="#">
                <img src={search}  width = "100%"  alt="Icons" />
           </button>
      </div>
    </div>
   </div>
 
    </div>
        <div className="progress-container" >
          <div className="progress-bar" id="myBar"></div>
        </div>  
</div>

        </>
        );
    }
}

export default Header;

    