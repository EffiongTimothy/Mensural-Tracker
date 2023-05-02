import React,{useState, useEffect} from "react";
import Calendar from "react-calendar";
import "../period/period.css"
import Moment from "react-moment";
import period from '../video/period.mp4'

function Period(){
    const[lastPeriod,setLastPeriod] = useState("")
    const[periodLength,setPeriodLength] = useState("")
    const[periodCycle,setPeriodCycle] =useState("")
    const[nextDate,setNextDate] = useState("") 
    const[endDate,setEndDate] = useState("")
    const[time,setTime] = useState("")



    
 function handleChange (e){
    if(e.target.name === 'lastPeriod'){
        setLastPeriod(e.target.value)
    }
    else if(e.target.name === 'periodLength'){
        setPeriodLength(e.target.value)
    }
    else if(e.target.name === 'periodCycle'){
        setPeriodCycle(e.target.value)
    }
 }
 
  useEffect(() => {
  const today = new Date();
    const hour = today.getHours();
    if (hour >= 5 && hour < 12) {
      setTime(" Good morning!");
    } else if (hour >= 12 && hour < 18) {
      setTime(" Good afternoon!");
    } else if (hour >= 18 && hour < 22) {
      setTime(" Good evening!");
    } else {
      setTime(" Good night!");
    }
},) 
  
function calculateFlow(){
    const lastDate = new Date(lastPeriod);
    const nextDate = new Date(lastDate.getTime() + periodCycle * 24 * 60 * 60 * 1000);
    const date = new Date(nextDate.getTime() + periodLength* 24* 60 * 60 * 1000)
    const options = {day: 'numeric', month: 'long', year: 'numeric'};
    const formattedDate = nextDate.toLocaleDateString('en-US', options);
   const formattedEndDate = date.toLocaleDateString('en-US',options)

   if(formattedDate == 'Invalid Date' || formattedEndDate == 'Invalid Date'){
    setNextDate("you hava entered a wrong input")
   }
   else{
    setNextDate("your next period will start on "+formattedDate);
    setEndDate("  until  "+formattedEndDate)
   }
}
 function reset(){
    setLastPeriod("")
    setPeriodLength("")
    setPeriodCycle("")
    setNextDate(null)
    setEndDate(null)

 } 
    
return(
    <React.Fragment>
    <div className="mainContainer">
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
            <marquee style={{color:"white"}} className="greet" direction="leftSide">{time} hava a wonderful day</marquee>
            <div className="text">
                <p className="welcome">Hi Welcome </p>
            </div>
            <div className="buttomNav">
            <div className="lastdate">
                <p className="head"> ENTER LAST PERIOD DATE</p>        
                <input className="calendar" type="date" name="lastPeriod" value={lastPeriod} onChange={handleChange}  />
                    </div>
                    <div className="periodclass">
                        <p className="header">ENTER PERIOD LENGTH </p>
                     <input className="periodlength" type="number" name="periodLength" value={periodLength} onChange={handleChange}  pattern="[0-9]*"/>
                     </div>    
                    <div className="cycleclass">
                         <p className="cycle">ENTER CYCLE LENGTH</p>
                    <input className="periodcycle" type="number" name="periodCycle" value={periodCycle} onChange={handleChange} pattern="[0-9]*" />
                    </div>
                    <br />
                <button className="calculate" type="button" onClick={calculateFlow}> Calculate</button>
                    <br/>
            </div>
           <div className="result"><p>{nextDate}  {endDate}</p>  
               </div>
               <br />
               <input type="reset" onClick={reset} className="reset"/></div>
            
               </React.Fragment>
    )
}
export default Period