const components = {}


components.trangChu = `
<!-- main -->
<main class="main-trang-chu">
    <section class="main-section-1">
        <div class="container" style="width:100%; padding: 0; position: relative;">  
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                <div class="item active">
                    <img src="./image/hotel-slider-1.jpg" alt="Slide1" style=" width: 100%;; height:600; ">
                </div>

                <div class="item">
                    <img src="./image/bitmap_3.jpg" alt="Slide2" style=" width:100%; height:600;">
                </div>
                
                <div class="item">
                    <img src="./image/slide-3-1024x682.jpg" alt="Slide3" style=" width:100%; height:600;">
                </div>
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="main-section-1-content"> 
           <h2>Mount Hotel</h2>
        </div>
    </section>
    <section class="main-section-2">
        <div>
            <div class="main-section-2-title gioithieu-gach" >
                <span>Chào mừng đến với</span>  
            </div> 
            <div>
                <h3>MONA HOTEL</h3>
            </div>
        </div>
        <div class="main-section-2-content">
            <div>Khách sạn Mona là một nhà nghỉ khách sạn được thành lập vào năm 2017 với 26 phòng có kích cỡ khách nhau phù hợp với nhiều nhu cầu của khách hàng. Hệ thống thiết bị hiện đại, điều hòa, tivi, bàn ghế được làm từ gỗ, sóng wifi và các các dịch vụ đưa đón khách tham quan các điểm du lịch. Được thiết kế và trang trí theo phong cách Mona rất sang trọng và quý phái. Các trang thiết bị và phòng ốc của nhà nghỉ – khách sạn rất tiện nghi và hiện đại nhằm mang lại sự hài lòng và thoải mái cho khách hàng trong suốt thời gian lưu trú tại phòng khách sạn.</div>
            <div>Khách sạn Mona là một nhà nghỉ khách sạn được thành lập vào năm 2017 với 26 phòng có kích cỡ khách nhau phù hợp với nhiều nhu cầu của khách hàng. Hệ thống thiết bị hiện đại, điều hòa, tivi, bàn ghế được làm từ gỗ, sóng wifi và các các dịch vụ đưa đón khách tham quan các điểm du lịch. Được thiết kế và trang trí theo phong cách Mona rất sang trọng và quý phái. Các trang thiết bị và phòng ốc của nhà nghỉ – khách sạn rất tiện nghi và hiện đại nhằm mang lại sự hài lòng và thoải mái cho khách hàng trong suốt thời gian lưu trú tại phòng khách sạn.</div>
        </div>
    </section>
    <section class="main-section-3">
        <div class="row">
            <div class="col-sm-3">
                <div class="box">
                    <div class="view view-first">
                        <div class="view">
                            <img style='height: 370px;' src="./image/hotelwp-rooms.jpg" />
                        </div>
                    </div>
                    <!-- End image 1 -->
                    <div class="box-content">
                        <h4>Phòng</h4>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="box">
                    <div class="view view-first">
                        <div class="view">
                            <img style='height: 370px;' src="./image/hotelwp-restaurant.jpg" />
                        </div>
                    </div>
                    <div class="box-content">
                        <h4>Nhà hàng</h4>
                    </div>
                    <!-- End image 2 -->
                </div>
            </div>
            <div class="col-sm-3">
                <div class="box">
                    <div class="view view-first">
                        <div class="view">
                            <img style='height: 370px;' src="./image/hotelwp-spa.jpg" />
                        </div>
                    </div>
                    <div class="box-content">
                        <h4>Spa</h4>
                    </div>
                    <!-- End image 3 -->
                </div>
            </div>
            <div class="col-sm-3">
                <div class="box">
                    <div class="view view-first">
                        <div class="view">
                            <img style='height: 370px;' src="./image/hotelwp-activities.jpg" />
                        </div>
                    </div>
                    <div class="box-content">
                        <h4>Khác</h4>
                    </div>
                    <!-- End image 4 -->
                </div>      
            </div>
        </div>
    </section>
    <section class="main-section-4">
        <div>
            <div class="main-section-4-title gioithieu-gach" >
                <span>Chào mừng đến với</span>  
            </div> 
            <div>
                <h3>LOẠI PHÒNG</h3>
            </div>
        </div>
        <div class="row">
            <div class="main-section-4-content">
                <div class="col-sm-4">
                    <div class="room-wapper">
                        <img class="room-img" src="./image/Hotel-WordPress-theme-room-4-370x300.jpg" alt="">
                        <p style="font-weight: 500; font-size: 170%;">Classic Room</p>
                        <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                            <li><i class="fas fa-angle-double-right"></i>18m2</li>
                            <li><i class="fas fa-angle-double-right"></i>1 giường đơn</li>
                            <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                        </ul>
                        <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$100 / đêm</span></p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="room-wapper ">
                        <img class="room-img" src="./image/Hotel-WordPress-theme-room-2-370x300.jpg" alt="">
                        <p style="font-weight: 500; font-size: 170%;">Budget Room</p>
                        <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                            <li><i class="fas fa-angle-double-right"></i>18m2</li>
                            <li><i class="fas fa-angle-double-right"></i>1 giường đôi</li>
                            <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                        </ul>
                        <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$200 / đêm</span></p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="room-wapper">
                        <img class="room-img" src="./image/Hotel-WordPress-theme-room-5-370x300.jpg" alt="">
                        <p style="font-weight: 500; font-size: 170%;">Premium Room</p>
                        <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                            <li><i class="fas fa-angle-double-right"></i>18m2</li>
                            <li><i class="fas fa-angle-double-right"></i>1 giường đôi</li>
                            <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                        </ul>
                        <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$200 / đêm</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main-section-5">
        <div class="main-section-5-img">
            <img src="./image/Hotel-WordPress-theme-room-2-370x300.jpg" alt="">
        </div>
        <div class="main-section-5-img">
            <img src="./image/Hotel-WordPress-theme-room-5-370x300.jpg" alt="">
        </div>
        <div class="main-section-5-img">
            <img src="./image/bg-testi.jpg" alt="">
        </div>
        <div class="main-section-5-img">
            <img src="./image/slide-3.jpg" alt="">
        </div>
        <div class="main-section-5-img">
            <img src="./image/hotelwp-spa.jpg" alt="">
        </div>
    </section>
</main>

    </div>
</div>`
components.gioiThieu = `
<!-- banner giới thiệu -->
<div>
    <img class="gioithieu-banner-1" src="./image/hinh-anh-khach-san-Phu-Quoc-Ocean-Pearl.png" alt="">
</div>
<!-- giới thiệu khách sạn -->
<section>
    <span class="gioithieu-gach">Chào mừng đến với</span>
    <p class="gioithieu-text">ABC HOTEL</p class="gioithieu-text">
    <div class="row gioithieu-text-wapper">
        <div class="col span-1-of-2">
            <span>
                Khách sạn Mona là một nhà nghỉ khách sạn được thành lập vào năm 2017 với 26 phòng có kích cỡ khách nhau phù hợp với nhiều nhu cầu của khách hàng. Hệ thống thiết bị hiện đại, điều hòa, tivi, bàn ghế được làm từ gỗ, sóng wifi và các các dịch vụ đưa đón khách tham quan các điểm du lịch. Được thiết kế và trang trí theo phong cách Mona rất sang trọng và quý phái. Các trang thiết bị và phòng ốc của nhà nghỉ – khách sạn rất tiện nghi và hiện đại nhằm mang lại sự hài lòng và thoải mái cho khách hàng trong suốt thời gian lưu trú tại phòng khách sạn.
            </span>
        </div>
        <div class="col span-1-of-2">
            <span>
                Khách sạn Mona là một nhà nghỉ khách sạn được thành lập vào năm 2017 với 26 phòng có kích cỡ khách nhau phù hợp với nhiều nhu cầu của khách hàng. Hệ thống thiết bị hiện đại, điều hòa, tivi, bàn ghế được làm từ gỗ, sóng wifi và các các dịch vụ đưa đón khách tham quan các điểm du lịch. Được thiết kế và trang trí theo phong cách Mona rất sang trọng và quý phái. Các trang thiết bị và phòng ốc của nhà nghỉ – khách sạn rất tiện nghi và hiện đại nhằm mang lại sự hài lòng và thoải mái cho khách hàng trong suốt thời gian lưu trú tại phòng khách sạn.
            </span>
        </div>
    </div>
    <div class="gioithieu-slider">

    </div>
</section>
<!-- banner phòng+thành viên -->
<div >
    <img class="gioithieu-banner-2" src="./image/hinh-anh-khach-san-Phu-Quoc-Ocean-Pearl.png" alt="">
</div>
<!-- điểm nổi bật -->
<section>
    <span class="gioithieu-gach">Chào mừng đến với</span>
    <p class="gioithieu-text">ĐIỂM NỔI BẬT </p>
    <div class="row">
        <div class="col span-1-of-3 gioithieu-room-wapper">
            <p> <i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <img class="gioithieu-room-img" src="./image/phong-standard.jpg" alt="">
        </div>
        <div class="col span-1-of-3 gioithieu-room-wapper">
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <img class="gioithieu-room-img" src="./image/phong-standard.jpg" alt="">
        </div>
        <div class="col span-1-of-3 gioithieu-room-wapper">
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <img class="gioithieu-room-img" src="./image/phong-standard.jpg" alt="">
        </div>
    </div>
</section>`

components.roomBookedInfo = `
    <!-- banner giới thiệu -->
    <div>
        <img class="gioithieu-banner-1" src="./image/hinh-anh-khach-san-Phu-Quoc-Ocean-Pearl.png" alt="">
    </div>
    <!-- giới thiệu khách sạn -->
    <section>
        <span class="gioithieu-gach">Thông tin phòng đặt</span>
        <p class="gioithieu-text">LOẠI PHÒNG</p class="gioithieu-text">
        <div class="row">
            <div class="col span-2-of-3">
                <img style="width: 80%;" src="./image/hinh-anh-khach-san-Phu-Quoc-Ocean-Pearl.png" alt="">
            </div>
            <div class="col span-1-of-3 ">
                <p style="text-align: center; margin: 10px;">THÔNG TIN </p>
                <div class="room-booked-info">
                    <div style="width: 50%;">
                        <p>Khách hàng </p>
                        <p>Ngày đặt</p>
                        <p>Ngày trả</p>
                        <p>Loại phòng</p>
                        <p>Tổng</p>
                    </div>
                    <div>
                        <p>Nguyễn Văn A</p>
                        <p>11/01/2020</p>
                        <p>12/01/2020</p>
                        <p>VIP</p>
                        <p>1000$</p>
                    </div>
                </div>
            </div>
        </div>
</section>
`
components.roomBooked = `
<!-- banner giới thiệu -->
<div>
    <img class="gioithieu-banner-1" src="./image/hinh-anh-khach-san-Phu-Quoc-Ocean-Pearl.png" alt="">
</div>
<!-- giới thiệu khách sạn -->
<section>
    <span class="gioithieu-gach">Chào mừng đến với</span>
    <p class="gioithieu-text">ĐẶT  PHÒNG</p class="gioithieu-text">
    <div class="row">
        <div class="col span-2-of-3">
            <div class="slider">
                <div class="gioithieu-text-wapper">
                    <p class="gioithieu-text" style="color: black;">ROOM DETAIL </p>
                    <span>
                        Khách sạn Mona là một nhà nghỉ khách sạn được thành lập vào năm 2017 với 26 phòng có kích cỡ khách nhau phù hợp với nhiều nhu cầu của khách hàng. Hệ thống thiết bị hiện đại, điều hòa, tivi, bàn ghế được làm từ gỗ, sóng wifi và các các dịch vụ đưa đón khách tham quan các điểm du lịch. Được thiết kế và trang trí theo phong cách Mona rất sang trọng và quý phái. Các trang thiết bị và phòng ốc của nhà nghỉ – khách sạn rất tiện nghi và hiện đại nhằm mang lại sự hài lòng và thoải mái cho khách hàng trong suốt thời gian lưu trú tại phòng khách sạn.
                    </span>
                </div>
            </div>
        </div>
        <div class="col span-1-of-3 booked-wapper">
            <button style="width: 100%; color: white;">ĐẶT NGAY</button>
            <div class="booked-line">
                <p style="text-align: center; margin-top: 20px; color: #e7ad44;font-size: 130%;">Thông tin</p>
                <input type="text" placeholder="Check-in Date">
                <input type="text" placeholder="Check-out Date">
                <input type="" placeholder="Number">
            </div>
        </div>
    </div>
</section>
<section>
    <span class="gioithieu-gach">Tiện ích và dịch vụ</span>
    <p class="gioithieu-text">ĐIỂM NỔI BẬT </p>
    <div class="row">
        <div class="col span-1-of-3 gioithieu-room-wapper">
            <p> <i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
        </div>
        <div class="col span-1-of-3 gioithieu-room-wapper">
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
        </div>
        <div class="col span-1-of-3 gioithieu-room-wapper">
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
            <p><i class="fas fa-check"></i> Phòng đầy đủ tiện nghi</p>
        </div>
    </div>
</section>
`
components.room = `
<div>
    <img class="gioithieu-banner-1" src="./image/hinh-anh-khach-san-Phu-Quoc-Ocean-Pearl.png" alt="">
</div>
<!-- giới thiệu khách sạn -->
<section>
    <span class="gioithieu-gach">Chào mừng đến với</span>
    <p class="gioithieu-text">LOẠI PHÒNG</p class="gioithieu-text">
    <div class="row">
        <div class="col span-1-of-3">
            <div class="room-wapper">
                <img class="room-img" src="./image/phong-standard.jpg" alt="">
                <p style="font-weight: 500; font-size: 170%;">Classic Room</p>
                <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                    <li><i class="fas fa-angle-double-right"></i>18m2</li>
                    <li><i class="fas fa-angle-double-right"></i>1 giường đơn</li>
                    <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                </ul>
                <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$1 / đêm</span></p>
            </div>
            <div class="room-wapper">
                <img  class="room-img" src="./image/phong-standard.jpg" alt="">
                <p style="font-weight: 500; font-size: 170%;">Classic Room</p>
                <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                    <li><i class="fas fa-angle-double-right"></i>18m2</li>
                    <li><i class="fas fa-angle-double-right"></i>1 giường đơn</li>
                    <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                </ul>
                <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$1 / đêm</span></p>
            </div>
        </div>
        <div class="col span-1-of-3">
            <div class="room-wapper">
                <img  class="room-img" src="./image/phong-standard.jpg" alt="">
                <p style="font-weight: 500; font-size: 170%;">Classic Room</p>
                <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                    <li><i class="fas fa-angle-double-right"></i>18m2</li>
                    <li><i class="fas fa-angle-double-right"></i>1 giường đơn</li>
                    <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                </ul>
                <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$1 / đêm</span></p>
            </div>
            <div class="room-wapper">
                <img  class="room-img" src="./image/phong-standard.jpg" alt="">
                <p style="font-weight: 500; font-size: 170%;">Classic Room</p>
                <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                    <li><i class="fas fa-angle-double-right"></i>18m2</li>
                    <li><i class="fas fa-angle-double-right"></i>1 giường đơn</li>
                    <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                </ul>
                <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$1 / đêm</span></p>
            </div>
        </div>
        <div class="col span-1-of-3">
            <div class="room-wapper">
                <img  class="room-img" src="./image/phong-standard.jpg" alt="">
                <p style="font-weight: 500; font-size: 170%;">Classic Room</p>
                <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                    <li><i class="fas fa-angle-double-right"></i>18m2</li>
                    <li><i class="fas fa-angle-double-right"></i>1 giường đơn</li>
                    <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                </ul>
                <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$1 / đêm</span></p>
            </div>
            <div class="room-wapper">
                <img  class="room-img" src="./image/phong-standard.jpg" alt="">
                <p style="font-weight: 500; font-size: 170%;">Classic Room</p>
                <ul class="ul" style="color: #8a8a8a; font-weight: 580;">
                    <li><i class="fas fa-angle-double-right"></i>18m2</li>
                    <li><i class="fas fa-angle-double-right"></i>1 giường đơn</li>
                    <li><i class="fas fa-angle-double-right"></i>Lake view</li>
                </ul>
                <p class="room-gach" style="color: #8a8a8a; font-weight: 600;">GIÁ : <span style="color:#e7ad44;">$1 / đêm</span></p>
            </div>
        </div>
    </div>
</section>`

components.register = `
    <div class="hinhnen">
    <img style="width: 100%; height: 250px;" src="nha-hang-1-768x410.jpg" alt="">
    </div>
    <div class="welcome">
    <div class="register-login" >
    <span>Chào mừng đến với</span>  
    </div> 
    <div>
    <h3 style="font-size: 250%; font-weight: 500; padding-top: 20px;">ĐĂNG KÝ MONA HOTEL</h3>
    </div>
    </div>
    <section class="register-container">
    
    <form id="form-register" class="form-register">
    <div class="form-header">
        <h3>Mount Hotel</h3>
    </div>
    <div class="form-content">
        <div class="name-wrapper">
            <div class="input-wraper">
                <input type="text" name="firstname" placeholder="Firstname">
                <div id="firstname-error" class="message-error"></div>
            </div>
            <div class="input-wraper">
                <input type="text" name="lastname" placeholder="Lastname">
                <div id="lastname-error" class="message-error"></div>
            </div>
        </div>
        <div class="input-wraper">
            <input type="email" name="email" placeholder="Email">
            <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wraper">
            <input type="password" name="password" placeholder="Password">
            <div id="password-error" class="message-error"></div>
        </div>
        <div class="input-wraper">
            <input type="password" name="comfirmPassword" placeholder="Comfirm password">
            <div id="comfirm-password-error" class="message-error"></div>
        </div>
            <div id="register-error" class="message-error"></div>
            <div id="register-success" class="message-success"></div>
    </div>
    <div class="form-footer">
        <a id="register-link" href="#">Đã có tài khoản? Đăng nhập</a>
        <button id="register-submit-btn" type="submit">Đăng ký</button>
    </div>
    </form>
    <div class="lienhe">
    <div class="register-login" >
    <span>Hoặc liên hệ trực tiếp</span>  
    </div>
    <div> 
    <div class="p">
    <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
    <p>Phone: <a href="#" class ="a"> 076 922 0162</a></p>
    <p>Email: <a href="#" class ="a"> demonhunterg@gmail.com</a></p>
    </div>
    <div class="btn-icon">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-twitter"></i>
    </div>   
    </div>
    </div>
    </section>`

components.logIn = `
    <div class="hinhnen">
    <img style="width: 100%; height: 250px;" src="nha-hang-1-768x410.jpg" alt="">
    </div>
    <div class="welcome">
    <div class="register-login" >
    <span>Chào mừng đến với</span>  
    </div> 
    <div>
    <h3 style="font-size: 250%; font-weight: 500; padding-top: 20px;">ĐĂNG NHẬP MONA HOTEL</h3>
    </div>
    </div>
    <section class="log-in-container">
    
    <form id="form-log-in" class="form-log-in">
    <div class="form-header">
        <h3>Mount Hotel</h3>
    </div>
    <div class="form-content">
            <input type="email" name="email" placeholder="Email">
            <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wraper">
            <input type="password" name="password" placeholder="Password">
            <div id="password-error" class="message-error"></div>
        </div>
        <div id="log-in-error" class="message-error"></div>
    </div>
    <div class="form-footer">
        <a id="log-in-link" href="#">Chưa có tài khoản? Đăng kí</a>
        <button id="log-in-submit-btn" type="submit">Đăng nhập</button>
    </div>
    </form>
    <div class="lienhe">
    <div class="register-logIn" >
    <span>Hoặc liên hệ trực tiếp</span>  
    </div>
    <div> 
    <div class="p">
    <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
    <p>Phone: <a href="#" class ="a"> 076 922 0162</a></p>
    <p>Email: <a href="#" class ="a"> demonhunterg@gmail.com</a></p>
    </div>
    <div class="btn-icon">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-twitter"></i>
    </div>   
    </div>
    </div>
    </section>`

components.chat =`
<div class="messenger">
    <div class="messenger-icon" style="padding: 0%;width: 50px; height: 50px; border-radius: 50%; background-color:#ffffff;">
        <i class="fab fa-facebook-messenger" id="openMess" style="font-size: 50px;color: #4482ff;align-items: center;width: 100%;height: 100%;" onclick="openMess()"></i>
    </div>
    <div class="messenger-container" >
        <nav class="messenger-nav">
            <span style="padding: 5px; font-weight: 600; color: #ffffff;">
                Hãy chat với chúng tôi
            </span>
            <button style="height: 100%;" id="closeMess" onclick="closeMess()">
                <i class="fas fa-times-circle" style="height: 100%;" ></i>
            </button>
        </nav>
        <div class="current-conversation">
            <div class="list-messages">
                <div class="message your">
                    <span>abcabc</span>    
                </div>
                <div class="message">
                    <span>123123</span>
                </div>
            </div>
        </div>
        <form class="form-send-message">
            <div class="input-wrapper">
                <input id="input-message" type="text" autocomplete="off" style="height:100%;" placeholder="Enter your message">
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
</div>
`

components.nav = `
<header style="height:80px;">
<nav class="header-nav" id="header-nav">
    <!-- Left Side -->
    <div class="nav-left-side">
       <img onclick="view.showComponents('trangChu')" src="./image/logo.png" alt="Mount Hotel" style="cursor: pointer;">
    </div>
    <!-- Middle Side -->
    <div class="nav-middle-side">
        <div onclick="view.showComponents('trangChu')" class="nav-detail"><span>Trang chủ</span></div>
        <div onclick="view.showComponents('gioiThieu')" class="nav-detail"><span>Giới thiệu</span></div>
        <div onclick="view.showComponents('room')" class="nav-detail"><span>Phòng</span></div>
        <div onclick="view.showComponents('logIn')" class="nav-detail"><span>Đăng nhập</span></div>
    </div>
    <!-- Right Side -->
    <div class="nav-right-side">
        <div class="nav-detail"><i class="fas fa-phone-alt" style="margin-right: 15px;"></i>0796 922 0162</div>
        <div class="nav-detail">
            <button >Đặt phòng</button>
        </div>
        <div class="nav-detail">
            <i id="user-menu" menu-toggle="none" class="fas fa-user" style="font-size: 25px;"></i>
            <div class="khung-menu">
                <span style="font-size: 10px;">item1</span>
                <span style="font-size: 10px;">item2</span>
                <span style="font-size: 10px;">item3</span>
            </div>
            
        </div>
        <div class="nav-detail icon">
            <i class="fa fa-bars" id="icon" style="font-size: 25px;" onclick="myFunction()" href="javascript:void(0);"></i>
        </div>
    </div>
</nav>
<div class="nav-responsive">
    <div class="nav-responsive-detail">
        <a href="#">Trang chủ</a>
    </div>
    <div class="nav-responsive-detail"><a href="#">Giới thiệu</a></div>
    <div class="nav-responsive-detail"><a href="#">Phòng</a></div>
    <div class="nav-responsive-deatil"><a href="#">Liên hệ</a></div>
</div>
</header>`
components.footer = `
<footer class="gioithieu-footer-1">
            <div class="col span-1-of-4 gioithieu-height">
                <img onclick="view.showComponents('trangChu')" class="footer-logo" src="./image/logo.png" alt="">
                <p>
                    Khách sạn Mona là một nhà nghỉ khách sạn được thành lập vào năm 2017 với 26 phòng có kích cỡ khách nhau phù hợp với nhiều nhu cầu của khách hàng
                </p>
            </div>
            <div class="col span-1-of-4">
                <p style="font-weight: bold;">MENU</p>
                <div class="row">
                    <div class="col span-1-of-2 gioithieu-height">
                        <a class="a"><p>Trang chủ</p></a>
                        <a class="a"><p>Phòng</p></a>
                        <a class="a"><p>Đăng ký/Đăng nhập</p></a>
                    </div>
                    <div class="col span-1-of-2 gioithieu-height">
                        <a class="a"><p>Giới thiệu</p></a>
                        <a class="a"><p>Tin tức</p></a>
                    </div>
                </div>
                <a href="#" class="gioithieu-btn">Đặt phòng</a>
            </div>
            <div class="col span-1-of-4 gioithieu-height">
                <p style="font-weight: bold;">LIÊN HỆ</p>
                <ul class="gioithieu-footer-1-lienhe">
                    <li><i class="fas fa-map-marker-alt"></i> 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</li>
                    <a class="a"><li><i class="fas fa-phone"></i> 076 922 0162</li></a>
                    <a class="a"><li><i class="fas fa-envelope"></i> demonhunterg@gmail.com</li></a>
                    <a class="a"><li><i class="fab fa-skype"></i> sky</li></a>
                </ul>
            </div>
            <div class="col span-1-of-4 gioithieu-height">
                <p style="font-weight: bold;">ĐĂNG KÍ</p>
                <p>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</p>
            </div>
        </footer>`