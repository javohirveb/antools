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
const likeRed = document.getElementById('like');

likeRed.addEventListener('click', () => {
    like.classList.toggle('red');
})