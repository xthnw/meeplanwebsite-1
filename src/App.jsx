import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Navhome from "./components/Navhome/Navhome";
import './App.css';
import SignIn from './SignIn';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './SignUp';

//ทำยังไงดีหละทีนี้เห้ออออ

function App() {
  const token = localStorage.getItem("accessToken");

    if (!token) {
    return <Login />
  }


  
  return(
    <div>
       <Navbar />
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/Login" element = {<Login />} />
            <Route path="/Signup" element = {<Signup />} />
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