document.addEventListener("DOMContentLoaded", function() {
    let photos = document.querySelectorAll(".photo");

    function animatePhotos() {
        photos.forEach(photo => {
            let position = photo.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                photo.style.opacity = "1";
                photo.style.transform = "translateX(0)";
            }
        });
        
    }

    window.addEventListener("scroll", animatePhotos);
    animatePhotos();
    setTimeout(() => {
        alert("Welcome to Asraful Sheikh Asif's Website!");
    }, 1000);
});
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let index = 0;
let startX = 0;
let isSwiping = false;

// Auto Slide Function
function autoSlide() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    updateSlide();
}

// Update Slide Position
function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Touch Swipe Events
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

slider.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    let moveX = e.touches[0].clientX - startX;
    slider.style.transform = `translateX(calc(-${index * 100}% + ${moveX}px))`;
});

slider.addEventListener('touchend', (e) => {
    isSwiping = false;
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        index++;
    } else if (endX - startX > 50) {
        index--;
    }
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    updateSlide();
});

// Auto-Slide every 3 seconds
setInterval(autoSlide, 3000);

        
var swiper = new Swiper('.swiper-container', {
    loop: true,  // Infinite Loop
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
    },
    effect: 'coverflow', // Smooth scrolling animation
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
