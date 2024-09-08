document.addEventListener("DOMContentLoaded", function() {
    //menu
    var hamburgerMenu = document.getElementById('hamburger-menu'); 
        var headerChinhPhai = document.querySelector('.header-chinh-phai'); 
    
        hamburgerMenu.addEventListener('click', function() {
            // Thêm hoặc gỡ class 'active' để hiển thị hoặc ẩn menu
            headerChinhPhai.classList.toggle('active'); 
        });
    
        // Khi người dùng nhấn ngoài menu, menu sẽ đóng lại
        document.addEventListener('click', function(event) {
            var isClickInsideMenu = headerChinhPhai.contains(event.target) || hamburgerMenu.contains(event.target);
    
            if (!isClickInsideMenu) {
                headerChinhPhai.classList.remove('active'); // Ẩn menu nếu click bên ngoài
            }
        });
    
    
    
    
    // Nút BACK TO TOP
    var nutLenDauTrang = document.getElementById("back-to-top");  
    window.addEventListener("scroll", function() {   
        if (window.scrollY > 100) {
            nutLenDauTrang.style.display = "block";
        } else {
            nutLenDauTrang.style.display = "none";
        }
    });
    nutLenDauTrang.addEventListener("click", function() {  
        window.scrollTo({
            top: 0,
            behavior: "smooth"  
        });
    });

    // TÌM KIẾM
    var khungNhapTimKiem = document.getElementById("search-input-container"); 
    var bieuTuongTimKiem = document.getElementById("search-icon");  

    bieuTuongTimKiem.addEventListener("click", function() {
        if (khungNhapTimKiem.style.display === "none" || khungNhapTimKiem.style.display === "") {
            khungNhapTimKiem.style.display = "block"; 
        } else {
            khungNhapTimKiem.style.display = "none";  
        }
    });

    // ZOOM ẢNH
    document.querySelectorAll(".thumb").forEach(function(hinhAnh) {
        hinhAnh.addEventListener("mouseover", function() {
            hinhAnh.style.transform = "scale(1.1)";
        });

        hinhAnh.addEventListener("mouseout", function() {
            hinhAnh.style.transform = "scale(1)";
        });
    });

    // Hiển thị thành viên khi cuộn trang
    function hienThiThanhVien() {
        const danhSachThanhVien = document.querySelectorAll('.thanh-vien');
        
        danhSachThanhVien.forEach(function(thanhVien) {
            const viTri = thanhVien.getBoundingClientRect().top;
            const chieuCaoManHinh = window.innerHeight;
            
            if (viTri < chieuCaoManHinh - 100) {
                thanhVien.style.opacity = '1';
                thanhVien.style.transform = 'translateX(0)';
            }
        });
    }

    window.addEventListener('scroll', hienThiThanhVien);
    hienThiThanhVien(); // Gọi hàm khi DOM đã được tải xong

    // Slider
    const khungSlider = document.querySelector('.slider-wrapper');
    if (khungSlider) {
        const danhSachSlide = document.querySelectorAll('.slide');
        const soLuongSlide = danhSachSlide.length;
        let chiSoHienTai = 0;

        const slideDau = danhSachSlide[0].cloneNode(true);
        const slideCuoi = danhSachSlide[soLuongSlide - 1].cloneNode(true);

        khungSlider.appendChild(slideDau);
        khungSlider.insertBefore(slideCuoi, danhSachSlide[0]);

        const danhSachSlideCapNhat = document.querySelectorAll('.slide');
        const soLuongSlideCapNhat = danhSachSlideCapNhat.length;
        const rongSlide = danhSachSlideCapNhat[0].offsetWidth;
        khungSlider.style.width = `${rongSlide * soLuongSlideCapNhat}px`;

        function chuyenDenSlideKeTiep() {
            chiSoHienTai = (chiSoHienTai + 1) % soLuongSlideCapNhat;
            if (chiSoHienTai === 0) {
                khungSlider.style.transition = 'none';
                khungSlider.style.transform = `translateX(0)`;
                setTimeout(() => {
                    khungSlider.style.transition = 'transform 0.5s ease';
                    khungSlider.style.transform = `translateX(-${rongSlide}px)`;
                }, 50);
            } else {
                khungSlider.style.transform = `translateX(-${chiSoHienTai * rongSlide}px)`;
            }
        }

        const thoiGianInterval = 2000; 
        setInterval(chuyenDenSlideKeTiep, thoiGianInterval);
    }
});
