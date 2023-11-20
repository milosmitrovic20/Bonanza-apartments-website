function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow = 'hidden';
    document.getElementsByTagName("header")[0].style.zIndex = '1';
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow = 'visible';
    document.getElementsByTagName("header")[0].style.zIndex = '5';
}
  
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function myFunction() {
    var x = document.querySelector(".nav-bar");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
