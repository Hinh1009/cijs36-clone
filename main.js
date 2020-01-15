window.onload = init
function init() {
  view.showComponents('trangChu')
  let showNav = document.getElementById("icon")
  showNav.onclick = myFunction
  let user = document.getElementById("user")
  user.onclick = userClickHanderler
  let user1 = document.getElementById("user1")
  user1.onclick = userClickHanderler


  
  
  function myFunction(){
    let  styleNavRespon = document.getElementsByClassName("nav-responsive")[0].style
    if(styleNavRespon.display === "none"){
      styleNavRespon.display = "block"
    } else {
      styleNavRespon.display = "none"
    }
  }
  function userClickHanderler(){
    view.showComponents("logIn")
  }
  
}