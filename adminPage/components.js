const components = {}

components.nav = `
<header style="height:80px;">
<nav class="header-nav" id="header-nav">
    <!-- Left Side -->
    <div class="nav-left-side">
       <img onclick="view.showComponents('trangChu')" src="./image/logo.png" alt="Mount Hotel" style="cursor: pointer;">
    </div>
    <!-- Right Side -->
                <div class="nav-middle-side">
                <div onclick="view.showComponents('adminAddRoom')" id="add-room" class="nav-detail">Add new offer</div>
                <div onclick="view.showComponents('adminBookingProcess')" id="booking" class="nav-detail">Booking process</div>
                <div onclick="view.showComponents('users')" id="users-edit" class="nav-detail">Users</div>
                <div onclick="view.showComponents('carrousels')" id="add-carrousels" class="nav-detail">Carrousels</div>
                <div id="sign-out" class="nav-detail">Log out</div>
            </div>
            </nav>
   `

components.addRoom = `
<div class="nav-under">
            <div class="nav-under-container">
                <h1 class="nav-under-content">Add new offer</h1>
            </div>
            <div class="nav-under-button">
                <button class="button"><i class="fas fa-plus"></i></button>
            </div>
            <hr class="soft">
        </div>
`

components.bookingProcess = `
<div class="nav-under">
            <div class="nav-under-container">
                <h1 class="nav-under-content">Booking process</h1>
            </div>
            <div class="nav-under-button">
                <button class="button"><i class="fas fa-plus"></i></button>
            </div>
            <hr class="soft">
        </div>
`
components.users = `
<div class="nav-under">
            <div class="nav-under-container">
                <h1 class="nav-under-content">Users</h1>
            </div>
            <hr class="soft">
        </div>
`

components.carrousels = `
<div class="nav-under">
            <div class="nav-under-container">
                <h1 class="nav-under-content">Carrousels</h1>
            </div>
            <div class="nav-under-button">
                <button class="button"><i class="fas fa-plus"></i></button>
            </div>
            <hr class="soft">
        </div>
`