import React from "react";
import Logingsvg from '../../image/login.svg'
import '../../period/openingPage.css'
import bird from '../../image/TSHH1497.png'
function OpeningPage(){
    
    return(
            <div className="back">
          <div className="y">
             <h1 className="u">FLOW</h1>
             <h2 className="slogan">Flow with <span style={{color:"blue"}}>Confidence</span> Stay on top of your <span style={{color:"red"}}>CYCLE</span></h2> 
              </div>
              <a href="/start" className="link">START</a>
              <div className="clock"></div>
          </div>
        
    )
}
export default OpeningPage