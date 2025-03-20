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
// Get visitor count from localStorage
let count = localStorage.getItem("visitorCount");

// If no count exists, start from 1
if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1; // Increase count
}

// Store updated count
localStorage.setItem("visitorCount", count);

// Display count in footer
document.getElementById("visitor-count").innerText = count;
