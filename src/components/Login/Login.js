import React, { useContext } from "react";
import '../Timer/timer.css'
import './login.css'
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context";
import jwtDecode from "jwt-decode";


export default function Login() {
    const { setUser, setProfile } = useContext(UserContext)
    const navigate = useNavigate()
    const responseMsg = (res) => {
        setUser(res)
        let decoded = jwtDecode(res.credential);
        setProfile(decoded);
        navigate('/timer')
    }
    const errorMsg = (err) => {
        console.log(err);
        alert("Login failed")
    }
    return <>
        <div className="login-container">
            <h3>Login</h3>
            <GoogleLogin onSuccess={responseMsg} onError={errorMsg} />
        </div>
    </>
}