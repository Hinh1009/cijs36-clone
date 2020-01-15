// save all UI logic
const view = {}

view.showComponents = function(name) {
    switch (name) {
        case 'register':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.register

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
                            registerInfo.confirmPassword &&
                            registerInfo.confirmPassword.length >= 6 &&
                            registerInfo.password === registerInfo.confirmPassword,
                            'comfirm-password-error',
                            'Invalid confirm password!'
                        )
                    ]
                    if (allPassed(validateResult)) {
                            console.log("OK")
                            controller.register(registerInfo)
                        }
                    }
                    break

                }
                
        case 'logIn':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.logIn

                let link = document.getElementById('log-in-link')
                link.onclick = logInLinkClickHandler

                let form = document.getElementById('form-log-in')
                form.onsubmit = formLogInSubmitHanler

                function logInLinkClickHandler() {
                    view.showComponents('register')
                }

                function formLogInSubmitHanler(e) {
                    e.preventDefault()

                    let logInInfo = {
                        email: form.email.value,
                        password: form.password.value
                    }
                    let validateResult = [
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

                    if (allPassed(validateResult)) {
                        controller.logIn(logInInfo)
                    }


                }
                break
            }
            case `trangChu`:{
                let app = document.getElementById('app')
                app.innerHTML = components.header + components.main + components.footer 
                // + components.messenger
                
                break
            }
    }
}

view.setText = function(id,text){
    document.getElementById(id).innerText=text
}
view.validate= function(condition,idErrorTag,messageError){
    if(condition){
        view.setText(idErrorTag,'')
        return true
    } else{
        view.setText(idErrorTag,messageError)
        return false
    }
}
view.disable= function(id){
    document.getElementById(id).setAttribute("disabled",true)
}
view.enable = function(id){
    document.getElementById(id).removeAttribute("disabled")
}
function allPassed(validateResult){
    for(let result of validateResult){
        if (!result){
            return false
        }
    }
    return true
}