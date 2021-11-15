import React, { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Navhome from "./components/Navhome/Navhome";
import './App.css';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Calendar from './Calendar';
import Login from './Login';
import Signup from './SignUp';
import Logout from './Logout';
import Profile from './Profile';
import { useCycle } from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { hedgehogScene, raccoonScene, squirrelScene } from "./scenes";
const SLIDE_CHANGE_TIME_MS = 5000;

import CookieConsent, { Cookies } from "react-cookie-consent";




//ทำยังไงดีหละทีนี้เห้ออออ

function App() {
    const [currentScene, setCurrentScene] = useCycle(
        hedgehogScene,
        raccoonScene,
        squirrelScene
    );
    
    useEffect(() => {
        const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
        return () => clearTimeout(timeOut);
    }, [currentScene, setCurrentScene]);

    const token = localStorage.getItem("accessToken");

    //   if (!token) {
    //   return <PasteTest />
    // }



    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <CookieConsent
                style={{ background: '#ABB7F0' }}
                enableDeclineButton
                onDecline={() => {
                    alert("bruh!");
                }}
            >Our website uses cookies to improve your experience, By clicking “I Understand”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. </CookieConsent>
        </div>
    )
}
export default App;


/*<div className="Main">
      <Navhome />
    </div>

<div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Login">SignIn</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/"><Home /></Route>
            <Route path="/Login"><Login /></Route>

        </div>

 */
/*<Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </Router>*/