const wrapper = document.querySelector('.carouselWrapper');
const slides = document.querySelectorAll('.carouselSlide');
const nextButton = document.querySelector('.carouselButton.next');
const prevButton = document.querySelector('.carouselButton.prev');

let currentIndex = 0;

function getTotalSlides() {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  return isMobile ? slides.length - 1 : slides.length-4; // Nếu màn hình nhỏ hơn 500px, giảm đi 2 slide
}

function updateCarousel() {
  const totalSlides = getTotalSlides(); // Lấy giá trị totalSlides dựa trên kích thước màn hình
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  if (currentIndex >= totalSlides) {
    currentIndex = 0; // Quay lại đầu nếu vượt quá số slide
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Quay lại cuối nếu đi ngược quá đầu
  }

  // Điều chỉnh giá trị translateX dựa trên kích thước màn hình
  const translateXValue = isMobile ? -currentIndex * 50 : -currentIndex * 20;
  wrapper.style.transform = `translateX(${translateXValue}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

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