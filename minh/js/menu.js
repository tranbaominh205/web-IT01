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