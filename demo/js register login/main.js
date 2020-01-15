window.onload = init

function init() {
    firebase.auth().onAuthStateChanged(function (user) {
       
        if (user && user.emailVerified) {
            view.showComponents('trangChu')
        } else {
            view.showComponents('register')
        }
    }) 
}