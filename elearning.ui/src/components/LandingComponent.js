import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import coursera from '../images/coursera.svg';
import edx from '../images/edx.svg';
import udemy from '../images/udemy.svg';
import dee from '../images/dee.jpg';
import hero from '.././images/hero.jpg';
import avi from '../images/avishek.jpg';
import nav from '../images/naveen.jpg';


 class Landing extends Component{
    constructor(props){
        super(props);
	}


    render(){
        return( 
        <>
      
        <div className="Hero">
	<div className="HeroText">
		<div className="HeroContent"> 
             <h4 className="drop-cap">
		 	the future is Digital <br/> Are you ? 
		 </h4>

		 <div className="getstart">  
		 <p>Get started with a click. </p>
     <Link to='/register'>
		 <button type ="button" onClick={this.onClick} className="btn btn-xs">Start now</button>
     </Link>
		 </div>
		</div>
		
	</div>
	<div className="HeroImg">
		<img src={hero} width = "50%" height="50%" alt="Icons"/>
	</div>

</div>




<div className="d-flex mt-4 flex-row partners">

    <div className="p-2 sidebar">
       <div className="intro">
      <h1 className="main" >Develop Skills<span className="ampersand">&amp;</span><br/><span>Anywhere, Anytime</span> </h1>
            <h2 className="left">We enjoy making things that enhance people's lives. In everything we create, We strive to deliver simplicity and clarity.We spend my time designing experiences for web applications and writing design code to bring my work to life. <br/><br/>
             </h2>
      </div>
  </div>


   <div className="py-2 pr-2 projects">
    <div className="pb-3 certhead">  
      <h1 id="certifications"><span className="slash">/</span>Our Partners <span className="slash">/</span></h1>
    </div>
   

     <div className="d-flex mt-3 certblock"> 
          <div className="pl-4 pb-4 cert1" >
            <img src={coursera} width = "60%" />
             <div className="overlay1">
             <div className="text1">Computer Science</div>
             </div>
          </div>
          <div className="pl-4 cert2"  >
             <img src={edx} width = "60%" />
             <div className="overlay2">
           <div className="text2"> Chemistry</div>
           </div>
          </div>
          <div className="pl-4 cert3" >
             <img src={udemy} width = "60%" />
              <div className="overlay3">
                <div className="text3">Physics</div>
              </div>
          </div>

     </div>   
      
      

   </div>
   
</div>
<div className="maincontent mt-4 "> 
<div className="testhead"> 
 <p className= "sidetext2"> <span className="slash">/</span>Our Message <span className="slash">/</span></p>
  </div>


  <div className="slider__inner">
    <div className="slider__contents">
    	<img className = "testimonial" src={nav}/>
      <h2 className="slider__caption">Naveen Chaudhary</h2>
      <p>Student! Gurgaon, Haryana</p>
      <p className="slider__txt">They have built a terrific and Highly effective peer to peer Education platform. We are pleased with the rewards tools that we have deployed and they have prooved to be terrific partners.</p>
    </div>
    <div className="slider__contents">
    	<img className = "testimonial" src={avi}/>
      <h2 className="slider__caption">Avishek Arora</h2>
      <p>Student! Pune, Maharastra</p>
      <p className="slider__txt">They have built a terrific and Highly effective peer to peer Education platform. We are pleased with the rewards tools that we have deployed and they have prooved to be terrific partners.</p>
    </div>
    <div className="slider__contents">
    	<img className = "testimonial" src={dee}/>
      <h2 className="slider__caption">Deepak Chauhan</h2>
      <p>Student! New Delhi, India</p>
      <p className="slider__txt">They have built a terrific and Highly effective peer to peer Education platform. We are pleased with the rewards tools that we have deployed and they have prooved to be terrific partners.</p>
    </div>
   
  </div>

</div>

        
        </>
        );
    }
}


export default Landing;
