// save all UI logic
const view = {
  currentComponent: null
}

view.showComponents = function(name) {
  
  switch(name) {
    case 'trangChu': {
      
      let app = document.getElementById('app')
      app.innerHTML = components.nav + components.trangChu + components.footer  + components.chat

      let icon = document.getElementById("icon")
      icon.onclick = () => {
          if (document.getElementsByClassName("nav-responsive")[0].style.display === "none") {
              document.getElementsByClassName("nav-responsive")[0].style.display = "block"
          } else {
              document.getElementsByClassName("nav-responsive")[0].style.display = "none"
          }
      }
      
      view.toggleUserMenu()
      view.quickChat()
      
    break
    }
    case 'gioiThieu': {
      let app =document.getElementById('app')
      app.innerHTML = components.nav +components.gioiThieu + components.footer + components.chat
      
      view.toggleUserMenu()
      view.quickChat()
      
    break
    }
    case 'roomBooked': {
      let app = document.getElementById('app')
      app.innerHTML =components.nav+ components.roomBooked + components.footer + components.chat
      
      view.toggleUserMenu()
      view.quickChat()
    
    break
    }
    case 'roomBookedInfo': {
      let app = document.getElementById('app')
      app.innerHTML =components.nav+ components.roomBookedInfo + components.footer + components.chat
      
      view.toggleUserMenu()
      view.quickChat()
    
      break
    }
    case 'room': {
      let app = document.getElementById('app')
      app.innerHTML =components.nav+ components.room+ components.footer + components.chat
    
      view.toggleUserMenu()
      view.quickChat()

      break
    }

    case 'register': {
      view.currentComponent = name
      let app = document.getElementById('app')
      app.innerHTML =components.nav+ components.register  + components.footer

      let link = document.getElementById('register-link')
      link.onclick = registerLinkCLickHandler

      let form = document.getElementById('form-register')
      form.onsubmit = formRegisterSubmitHandler

      function registerLinkCLickHandler() {
        view.showComponents('logIn')
      }

      function formRegisterSubmitHandler(e) {
        e.preventDefault() 
        
        let registerInfo = {
          firstname: form.firstname.value,
          lastname: form.lastname.value,
          email: form.email.value,
          password: form.password.value,
          confirmPassword: form.comfirmPassword.value
        }
        let validateResult = [
          view.validate(registerInfo.firstname, 'firstname-error', 'Invalid firstname!'),
          view.validate(registerInfo.lastname, 'lastname-error', 'Invalid lastname!'),
          view.validate(
            registerInfo.email && registerInfo.email.includes('@'),
            'email-error',
            'Invalid email!'
          ),
          view.validate(
            registerInfo.password && registerInfo.password.length >= 6,
            'password-error',
            'Invalid password!'
          ),
          view.validate(
            registerInfo.confirmPassword
            && registerInfo.confirmPassword.length >= 6
            && registerInfo.password == registerInfo.confirmPassword,
            'comfirm-password-error',
            'Invalid confirm password!'
          )
        ]
        if(allPassed(validateResult)) {
          controller.register(registerInfo)
        }
      
      }
      view.toggleUserMenu()
      
      break
    }
    case 'logIn': {
      let app = document.getElementById('app')
      app.innerHTML = components.nav+ components.logIn  +components.footer
      
      let link = document.getElementById('log-in-link')
      link.onclick = logInLinkClickHandler

      let form =document.getElementById('form-log-in')
      form.onsubmit = formLogInSubmitHanler

      function logInLinkClickHandler() {
        view.showComponents('register')
      }
      
      function formLogInSubmitHanler(e){
        e.preventDefault()

        let logInInfo ={
          email: form.email.value,
          password: form.password.value
        }
        let validateResult=[
          view.validate(
            logInInfo.email && logInInfo.email.includes('@'),
            'email-error',
            'Invalid email!'
          ),
          view.validate(
            logInInfo.password && logInInfo.password.length >= 6,
            'password-error',
            'Invalid password!'
          )
        ]

        if(allPassed(validateResult)){
          controller.logIn(logInInfo)
        }  
      }

      view.toggleUserMenu()
      break
    }
  }
 
}

view.toggleUserMenu = function(){
  let userMenu = document.getElementById('user-menu')
  userMenu.onclick = function(){
    let menuToggle = this.getAttribute('menu-toggle')
    menuToggle = (menuToggle == 'none') ? 'block' : 'none'
    this.setAttribute('menu-toggle', menuToggle)
    document.getElementsByClassName('khung-menu')[0].style.display = menuToggle
  }
}

view.quickChat = function(){
  let openMess = document.getElementById("openMess")
  openMess.onclick = () => {
      document.getElementsByClassName("messenger-container")[0].style.display = "block"
  }
  let closeMess = document.getElementById("closeMess")
  closeMess.onclick = () => {
      document.getElementsByClassName('messenger-container')[0].style.display = "none"
  }
}

view.setText = function(id, text) {
  document.getElementById(id).innerText = text
}

view.validate = function(condition, idErrorTag, messageError) {
  if(condition) {
    view.setText(idErrorTag, '')
    return true
  } else {
    view.setText(idErrorTag, messageError)
    return false
  }
}
view.disable = function(id){
    document.getElementById(id).setAttribute('disabled', true)
}
view.enable = function(id){
  document.getElementById(id).removeAttribute('disabled')
}



function allPassed(validateResult){
  for(let result of validateResult){
    if(!result){
      return false
    }
  }
  return true
}