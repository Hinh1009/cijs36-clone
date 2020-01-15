const controller ={}
controller.register = async function(registerInfor){
    //1. Creat user with email and password
    //2. Update user's display name = firstname+ " "+ lastname
    //3. Send user an email verification
    let email = registerInfor.email
    let password = registerInfor.password
    let displayName= registerInfor.firstname +" "+ registerInfor.lastname
    view.setText("register-error",'')
    view.setText("register-success",'')
    view.disable("register-submit-btn")
    try{
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    await firebase.auth().currentUser.updateProfile({
        displayName: displayName
    })
    await firebase.auth().currentUser.sendEmailVerification()
    view.setText("register-success",'An email verification has been sended to your email address')
    firebase.auth().signOut()
    }  
    catch(err){
    view.setText("register-error",err.message)
    }
    view.enable("register-submit-btn")

}

controller.logIn = async function(logInInfor){
    // firebase.auth().signInWithEmailAndPassword()
    let email = logInInfor.email
    let password = logInInfor.password 
    view.setText("log-in-error",'')
    view.disable("log-in-submit-btn")
    try{
        let result = await firebase.auth().signInWithEmailAndPassword(email,password)
        if(!result 
            || !result.user.emailVerified
            ){
            throw new Error("You must be verified Email")
        }
    } catch(err){
        view.setText("log-in-error",err.message)
        view.enable("log-in-submit-btn")
    }
   
}


