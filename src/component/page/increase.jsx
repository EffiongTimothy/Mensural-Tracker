import React, { useState } from "react";
function Reduce(){
    const[counter,setCounter]= useState(0)

    function handleClick(e){
        if(e.target.name === 'count++'){
            setCounter(counter+1)
        }
    else if(e.target.name ==='count--'){
        setCounter(counter-1)
        }
        else if(e.target.name == 'countI'){
            setCounter(e.target.value)
        }
        else if(e.target.name == 'countL'){
            setCounter(counter - e.target.value)
        }
        
    }
    return(
        <div style={{background:"white",height:"50vh"}}>
            <p>number {counter}</p>
            <button type="number" name="count++" onClick={handleClick} style={{background:"green",height:"20vh"}}/>
            <button type="number" name="count--" onClick={handleClick} style={{background:"red",height:"10vh"}}/>
            <input type="number" name="countI" onChange={handleClick} value={counter}/>
            <input type="number" name="countL" onChange={handleClick} value={counter}/>
            

        </div>
    )
}
export default Reduce