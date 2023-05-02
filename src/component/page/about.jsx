import React,{useState, useRef, useEffect} from "react";
import '../../period/about.css'
import period from '../../video/period.mp4'
function About(){
    const videoRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },)
  
    return(
        <div className="aboutmainContainer">
        <div className="topNav">
               <div className="ptag">
                   <p className="logo">FLOW</p>
               </div>
               <nav>
                   <li>
                       <a href="https://github.com/EffiongTimothy" className="name2">GitHub</a>
                   </li>
                   <li>
                       <a href="/About" className="name3">About</a>
                   </li>
                   <li>
                       <a href="" className="name4">Contact</a>
                   </li>
               </nav>
           </div>
            <div className="back">
          <div className="ya">
              </div>
              <h2 className="io"> <span style={{color:"blue",fontSize:"30px"}}>FLOW</span> is a web app designed to help women track their menstrual cycle. It provides an easy and convenient way for women to keep track of their periods, showing them when their next period will come.

Using <span style={{color:"blue",fontSize:"30px"}}>FLOW</span>, women can enter the date of their last period and the length of their menstrual cycle. Based on this information, the app calculates the expected start date of their next period and displays it on the screen.<span style={{color:"blue",fontSize:"30px"}}>FLOW</span> also provides an estimated end date for the period.

The app is designed to be user-friendly and simple to use. It's also great for women who are trying to conceive as they can track their ovulation days.

With <span style={{color:"blue",fontSize:"30px"}}>FLOW</span>, women can have a better understanding of their menstrual cycle and plan accordingly.
Overall,<span style={{color:"blue",fontSize:"30px"}}>FLOW</span> is a must-have app for any woman looking to take control of their menstrual cycle and stay organized. It's a convenient and reliable tool that provides accurate predictions and helps women plan their lives with ease.</h2> 
             <div className="videodiv">
             </div>
             <video src={period} autoPlay controls  ref={videoRef}></video>
          </div> 
          <div></div>
          </div>
    )
}
export default About