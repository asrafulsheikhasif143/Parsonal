document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Welcome message animation
    setTimeout(() => {
        alert("Welcome to Asraful Sheikh Asif's Website!");
    }, 1000);
});
