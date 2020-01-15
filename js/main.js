window.onload = init 
function init(){
    let openMess=document.getElementById("openMess")
    openMess.onclick = ()=>{
        document.getElementsByClassName("messenger-container")[0].style.display = "block"
    } 
    let closeMess= document.getElementById("closeMess")
    closeMess.onclick = ()=>{
        document.getElementsByClassName('messenger-container')[0].style.display = "none"
    }
    let icon = document.getElementById("icon")
    icon.onclick= ()=>{
        if(document.getElementsByClassName("nav-responsive")[0].style.display==="none"){
            document.getElementsByClassName("nav-responsive")[0].style.display="block"
        } else{
            document.getElementsByClassName("nav-responsive")[0].style.display="none"
        }
    }
}