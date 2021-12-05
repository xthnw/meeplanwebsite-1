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
//import Profile from './Profile';
import Profilen from './Profilen';
import Notify from './Notify';
import { useCycle } from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { hedgehogScene, raccoonScene, squirrelScene } from "./scenes";
const SLIDE_CHANGE_TIME_MS = 5000;



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
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/Alarm" element={<Alarm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profilen />} />
                <Route path="/profilen" element={<Profilen />} />
                <Route path="/notify" element={<Notify />} />
            </Routes>
            
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