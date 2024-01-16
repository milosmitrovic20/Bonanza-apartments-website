/*function openModal() {
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
}*/

// Gallery slider

/*let slider = [
    {
        img: 'images/superior1.jpg',
        title: 'Superior',
        text: 'Za opušten odmor vaše porodice',
    },
    {
        img: 'images/standard.jpg',
        title: 'Standard',
        text: 'Za opušten odmor vaše porodice',
    },
    {
        img: 'images/studio.jpg',
        title: 'Studio',
        text: 'Za opušten odmor vaše porodice',
    }
]

let sliderImg = document.querySelector('.content-image')
let sliderHeading = document.querySelector('.apartment-title')
let sliderTxt = document.querySelector('.aparment-content-overlay-hidden')

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
})*/