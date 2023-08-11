import './App.css';
import React, {useState, useEffect} from 'react';
import {GoogleLogin} from '@react-oauth/google'
import Timer from './components/Timer/Timer';
function App() {

  const responseMsg = (res)=>{
    console.log(res);
  }
  const errorMsg =(err)=>{
    console.log(err);
  }

  return (
  
      // <div>
      //    <GoogleLogin onSuccess={responseMsg} onError={errorMsg}/>
      // </div>
      <Timer/>
  );
  
}

export default App;
