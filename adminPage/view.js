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

                get_booking = async function(book){
                    var booking_list = await firebase
                        .firestore()
                        .collection('book')
                        .get()
                    // console.log(booking_list.docs)
                    if(!booking_list.empty){
                        for(let i=0; i < booking_list.size; i++){
                            $('.booking_list tbody').append(`
                                <tr>
                                    <td>${booking_list.docs[i]._document.proto.fields.user_name.stringValue}</td>
                                    <td>${booking_list.docs[i]._document.proto.fields.phone_number.stringValue}</td>
                                    <td>${booking_list.docs[i]._document.proto.fields.room_type.stringValue}</td>
                                    <td>${booking_list.docs[i]._document.proto.fields.check_in.stringValue}</td>
                                    <td>${booking_list.docs[i]._document.proto.fields.check_out.stringValue}</td>
                                </tr>
                            `)
                        }
                    }
                }
                get_booking();
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