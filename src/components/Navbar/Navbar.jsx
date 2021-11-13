import React,{Component} from'react';
import{MenuItems} from "./MenuItems";
import{Button} from"../Button";
import'./Navbar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Avatar from '@mui/material/Avatar';

class Navbar extends Component{
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

//backend เป็นกำลังใจให้นะ5555555555555555555555 คำว่า Home มันอยู่ในไหนอะะะะะะ หาไม่เจออsad ไปกินข้าวแพร้บบบบบบ kk
  render(){
    return(
      <nav className = "NavbarItems">
        <div className = "Logo">
          <a href="https://meeplanwebsite-1.meeplan.repl.co/">
            <img src="/src/Picture/Logo.png" style={{width:'180px',height: '68px'}} />
          </a>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar



// <img src="/src/Picture/Logo.png" href="/login" 
//           style={{width:'180px',height: '68px'}}  />