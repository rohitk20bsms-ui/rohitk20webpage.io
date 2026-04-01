document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    
    // Only start the carousel if slides actually exist on the current page
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (slides.length > 0) {
        showSlides();
    }

    function showSlides() {
        let i;
        
        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    
        
        // Remove "active" class from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        // Display current slide and set active dot
        slides[slideIndex - 1].style.display = "block";  
        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
        }
        
        // Change image every 4 seconds
        setTimeout(showSlides, 4000); 
    }
});
