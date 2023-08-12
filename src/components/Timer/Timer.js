import React from "react";
import { useState } from "react";
import './timer.css'
import { useEffect } from "react";

export default function Timer(){
    const [minutes, setMinutes] = useState(25)
    const [breakTime, setBreakTime] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [interval, setIntr] = useState();
    const [controls, setControls] = useState({
        start: false,
        pause: false,
        reset: false
    })
    //console.log(minutes,seconds);

   

    const startTimer =()=>{
        setControls(prev=>({
            start: true,
            pause: false,
            reset: false
        }))
        if(interval === undefined){
            let interval = setInterval(()=>{
            setIntr(interval)
            // setSeconds((prevSec)=>{
            //     if(prevSec === 0 ){
            //         setMinutes((prevMin)=>{
            //             if(prevMin <=0){
            //                 isBreakActive();
            //                 setSeconds(0)
            //                 clearInterval(interval)
            //                 return 0
            //             }
            //             return prevMin-1
            //         })
            //          return 2;
            //     }
            //     else return prevSec-1;
            // })
            console.log(minutes, seconds);
            setSeconds((prevSec)=>{
                if(prevSec === 0 ){
                    setMinutes((prevMin)=>{
                        if(prevMin > 0){
                            console.log("1");
                            setSeconds(59)
                            return prevMin-1
                        }
                        else {
                            console.log("2");
                            setBreakTime((prev)=>{
                                if(!prev){
                                    setSeconds(0);
                                    setMinutes(5) 
                                    return true
                                }
                                else{
                                    clearInterval(interval)
                                    setIntr()
                                    setSeconds(0)
                                    setMinutes(0)
                                    return false
                                }
                            })
                              
                        }
                    })   
                }
                else{
                    console.log("3");
                    return prevSec-1
                }
            })
                
        
        
        },1000);}
    }

    const pauseTimer =()=>{
        setControls(prev=>({
            start: false,
            pause: true,
            reset: false
        }))
        clearInterval(interval)
        setIntr()
        setSeconds(prevSec=>prevSec)
        setMinutes(prevMin=>prevMin)
    }

    const resetTimer = () =>{
        setControls(prev=>({
            start: false,
            pause: false,
            reset: false
        }))
        clearInterval(interval)
        setIntr()
        setMinutes(25)
        setSeconds(0)
        setBreakTime(false)
    }

    return<>
        <div className="timer-container">
            <h3>Hey  it's time</h3>
            <div className="number" contentEditable={false}>{minutes} : {seconds} </div>
            { breakTime && <p>Break Time &#128515;</p>}
            <div className="timer-controls">
                <div>
                    <button onClick={startTimer} className= {(controls.start)? 'btn grayed' : 'btn'} id="btn-start" disabled={controls.start} >START</button>
                </div>
                <div>
                    <button onClick={pauseTimer} className={(controls.pause)? 'btn grayed' : 'btn'} id="btn-pause" disabled={controls.pause} >PAUSE</button>
                </div>
                <div>
                    <button onClick={resetTimer} className={(controls.reset)? 'btn grayed' : 'btn'} id="btn-reset" disabled={controls.reset} >RESET</button>
                </div>
            </div>

        </div>
    </>
}