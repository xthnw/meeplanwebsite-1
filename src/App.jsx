import React, { useEffect  } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Navhome from "./components/Navhome/Navhome";
import './App.css';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Homee from './components/Homee';
import Calendar from './Calendar';
import Alarm from './Alarm';
import Login from './Login';
import Signup from './SignUp';
import Logout from './Logout';
import Profile from './Profile';
import Profilen from './Profilen';
import Notify from './Notify';
import { useCycle } from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { hedgehogScene, raccoonScene, squirrelScene } from "./scenes";
const SLIDE_CHANGE_TIME_MS = 5000;

import CookieConsent, { Cookies } from "react-cookie-consent";

// import { io } from "socket.io-client";
// const socket = io("https://MeePlan101-backend.meeplan.repl.co");



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
    //logout if token expired
    if(token){
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      if (decodedToken.exp * 1000 < Date.now()) {
          return <Logout />;
        }
    }
    //   if (!token) {
    //   return <PasteTest />
    // }



    return (
        <div>
            <Navbar sticky="top"/>
            <Routes>
                <Route path="/" element={<Homee />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/Alarm" element={<Alarm />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profilen" element={<Profilen />} />
                <Route path="/notify" element={<Notify />} />
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