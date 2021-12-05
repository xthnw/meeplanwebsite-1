import React,{Component} from'react';
import{MenuItems} from "./MenuItems";
import{Button} from"../Button";
import'./Navbar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

import Logo from '../../Picture/Logo.png';

var token = localStorage.getItem("accessToken");
var username = localStorage.getItem('user');

class Navbar extends Component{
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
    

  render(){
    return(
      <nav className = "NavbarItems">
        <div className = "stalemoon">
          <a href={window.location.origin}>
            <img src={Logo} style={{width:'180px',height: '68px'}} />
          </a>
        </div>
        
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        
        
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {MenuItems.map((item,index)=>{                    return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        
      </nav>
    )
  }
}

export default Navbar
  // if (token){
  //   document.getElementById("loginicon").innerHTML = username;
  //   document.getElementById("loginicon").href = "/profile";
  // }
  // else{
  //   document.getElementById("loginicon").innerHTML = "Login";
  //   document.getElementById("loginicon").href = "/login";
  // }


// <img src="/src/Picture/Logo.png" href="/login" 
//           style={{width:'180px',height: '68px'}}  />