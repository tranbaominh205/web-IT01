const goToTopBtn = document.getElementById('goToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        goToTopBtn.style.display = 'block';
    } else {
        goToTopBtn.style.display = 'none';
    }
};

goToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};