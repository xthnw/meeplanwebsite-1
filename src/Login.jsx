import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import SignIn from './SignIn';

function Login() {
  return(
    <div className="Main">
        <SignIn />
    </div>
  );
}
export default Login;