import '/src/App.css';

var token = localStorage.getItem("accessToken");
const username = JSON.parse(localStorage.getItem('user'));

function navMenu() {
  var menu;
  if (token){
    menu = [  
      {
        title:'📅 Calendar',
        url:'/calendar',
        cName:'nav-links'
      },
      {
        title:'⏰ Alarm',
        url:'/alarm',
        cName:'nav-links'
      },
      {
        title: "😊 " + username,
        url:'/profile',
        cName:'nav-links'
      },
      {
        title: 'Logout',
        url:'/logout',
        cName:'nav-links'
      }
    ]
  }
  else{
    menu = [
      {
        title:'Login',
        url:'/login',
        cName:'nav-links'
      },
      {
        title:'Register',
        url:'/SignUp',
        cName:'nav-links'
      }
    ]
  }
  return (menu)
}

export const MenuItems = navMenu();