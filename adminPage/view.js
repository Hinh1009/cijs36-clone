const view = {
    // currentComponent = null
}

console.log("sssssss")

view.showComponents = function(name) {
    switch (name) {
        case 'adminAddRoom':
            {
                // view.currentComponent = name
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.addRoom

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()

             
            }
            break
        case 'adminBookingProcess':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.bookingProcess

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()
            }
            break
        case 'users':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.users

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()
            }
            break    
        case 'carrousels':
            {
                let app = document.getElementById('app')
                app.innerHTML = components.nav + components.carrousels

                let signOutBtn = document.getElementById('sign-out')
                signOutBtn.onclick = () => firebase.auth().signOut()
            }
            break    
    }
}