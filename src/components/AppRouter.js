import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./Timer/Timer";
import Login from "./Login/Login";

export default function AppRouter(){
   
    return<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/timer" element={<Timer/>}/>
            </Routes>
        </BrowserRouter>
    </>
}