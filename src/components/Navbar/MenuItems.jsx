import '/src/App.css';

var token = localStorage.getItem("accessToken");
var username = localStorage.getItem('user');

if (token){
  var lastMenu = {
    title: username,
    url:'/profile',
    cName:'nav-links'
  }
  var logOut = {
    title: 'Logout',
    url:'/Logout',
    cName:'nav-links'
  }
}
else{
  var lastMenu = {
    title:'Login',
    url:'/login',
    cName:'nav-links'
  }
  var logOut = {
  }
}

export const MenuItems =[
  {
    title:'Calendar',
    url:'/Calendar',
    cName:'nav-links'
  },
  lastMenu,
  logOut
  // {
  //   title:'Logout',
  //   url:'/logout',
  //   cName:'nav-links'
  // }
]