import '/src/App.css';

var token = localStorage.getItem("accessToken");
const username = JSON. parse(localStorage.getItem('user'));

if (token){
  var calendar = {
    title:'📅 Calendar',
    url:'/calendar',
    cName:'nav-links'
  }
  var lastMenu = {
    title: "👩🏻‍💻 " + username,
    url:'/profile',
    cName:'nav-links'
  }
  var logOut = {
    title: 'Logout',
    url:'/logout',
    cName:'nav-links'
  }
}
else{
  var calendar = {
  }
  var lastMenu = {
    title:'Login',
    url:'/login',
    cName:'nav-links'
  }
  var logOut = {
    title:'Register',
    url:'/SignUp',
    cName:'nav-links'
  }
}

export const MenuItems =[
  calendar,
  lastMenu,
  logOut
  // {
  //   title:'Logout',
  //   url:'/logout',
  //   cName:'nav-links'
  // }
]