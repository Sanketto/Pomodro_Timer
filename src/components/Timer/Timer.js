import React from "react";
import { useState } from "react";
import './timer.css'
import { useEffect } from "react";

export default function Timer(){
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [interval, setIntr] = useState();

    

    const startTimer =()=>{
        if(interval === undefined){
            let interval = setInterval(()=>{
            setIntr(interval)
            setSeconds((prevSec)=>{
                if(prevSec == 0 ){
                    setMinutes((prevMin)=>{
                        if(prevMin <=0){
                            setSeconds(0)
                            clearInterval(interval)
                            return 0
                        }
                        return prevMin-1
                    })
                     return 59;
                }
                else return prevSec-1;
            })
        
        
        
        },1000);}
    }

    const pauseTimer =()=>{
        clearInterval(interval)
        setIntr()
        setSeconds(prevSec=>prevSec)
        setMinutes(prevMin=>prevMin)
    }

    const resetTimer = () =>{
        clearInterval(interval)
        setIntr()
        setMinutes(25)
        setSeconds(0)
    }

    return<>
        <div className="timer-container">
            <div className="number" contentEditable={false}>{minutes} : {seconds} </div>
            <div className="timer-controls">
                <div>
                    <button onClick={startTimer} className="btn" id="btn-start" >START</button>
                </div>
                <div>
                    <button onClick={pauseTimer} className="btn" id="btn-pause" >PAUSE</button>
                </div>
                <div>
                    <button onClick={resetTimer} className="btn" id="btn-reset" >RESET</button>
                </div>
            </div>

        </div>
    </>
}