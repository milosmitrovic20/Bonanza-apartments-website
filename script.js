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

    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

let slider = [
    {
        img: 'images/slider-image3.jpg',
        title: 'Efficient Learning Methods',
        text: 'Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque euex eu urna venenatis sollicitudin ut at libero. Vist teplatemo page.',
    },
    {
        img: 'images/slider-image2.jpg',
        title: 'Start your journey with our practical courses',
        text: 'Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque euex eu urna venenatis sollicitudin ut at libero. Vist teplatemo page.',
    },
    {
        img: 'images/slider-image1.jpg',
        title: 'Distance Learning Education Center',
        text: 'Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque euex eu urna venenatis sollicitudin ut at libero. Vist teplatemo page.',
    }
]

let sliderImg = document.querySelector('.slider-image')
let sliderHeading = document.querySelector('.slider-heading')
let sliderTxt = document.querySelector('.slider-text')

let prevBtn = document.querySelector('.left')
let nextBtn = document.querySelector('.right')

window.addEventListener('DOMContentLoaded', function(){
    showSlider()
})

let counter = 0

function showSlider(){
    let item = slider[counter]
    sliderImg.src = item.img
    sliderHeading.textContent = item.title
    sliderTxt.textContent = item.text
}

prevBtn.addEventListener('click', function(){
    counter++
    if(counter > slider.length - 1){
        counter = 0
    }
    showSlider()
})

nextBtn.addEventListener('click', function(){
    counter--
    if(counter < 0){
        counter = slider.length - 1
    }
    showSlider()
})