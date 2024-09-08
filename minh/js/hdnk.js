document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.accordion-header').forEach(header => {
            header.classList.remove('active');
            header.nextElementSibling.style.display = 'none';
        });

        if (!isActive) {
            item.classList.add('active');
            item.nextElementSibling.style.display = 'block';
        }
    });
});