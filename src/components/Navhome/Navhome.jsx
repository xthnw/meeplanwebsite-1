import React,{Component} from'react';
import{Menu} from "./Menu";
import{Button} from"../Button";
import'./Navhome.css';

class Navhome extends Component{
  state = { clicked: false }

  render(){
    return(
      <nav className = "NavbarItems">
        <div className = "Logo">
           <img src="/src/Picture/Logo.png" style={{width:'180px',height: '68px'}} href="/" />
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {Menu.map((item,index)=>{
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default Navhome