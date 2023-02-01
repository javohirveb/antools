const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// nav fixed
const navFixed = document.getElementById('nav-fixed');
const overlay = document.getElementById('overlay')

menuBtn.addEventListener('click', () => {
    navFixed.classList.toggle('fixed-top');
    overlay.classList.toggle('hidden')
})

// like 
let like1 = document.getElementById('like1');
let like2 = document.getElementById('like2');
let like3 = document.getElementById('like3');
let like4 = document.getElementById('like4');
let like5 = document.getElementById('like5');
let like6 = document.getElementById('like6');
let like7 = document.getElementById('like7');
let like8 = document.getElementById('like8');
let like9 = document.getElementById('like9');
let like10 = document.getElementById('like10');

like1.addEventListener('click', () => {
    like1.classList.toggle('red');
})

like2.addEventListener('click', () => {
    like2.classList.toggle('red');
})

like3.addEventListener('click', () => {
    like3.classList.toggle('red');
})

like4.addEventListener('click', () => {
    like4.classList.toggle('red');
})

like5.addEventListener('click', () => {
    like5.classList.toggle('red');
})

like6.addEventListener('click', () => {
    like6.classList.toggle('red');
})

like7.addEventListener('click', () => {
    like7.classList.toggle('red');
})

like8.addEventListener('click', () => {
    like8.classList.toggle('red');
})

like9.addEventListener('click', () => {
    like9.classList.toggle('red');
})

like10.addEventListener('click', () => {
    like10.classList.toggle('red');
})

// carousel
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
    let slides = document.getElementsByClassName("testimonials__slide");
    let dots = document.getElementsByClassName("testimonials__dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}