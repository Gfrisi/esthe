function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('change');
    navbar.classList.toggle('active');
}

let currentIndex = 0;
const carrosel = document.querySelector('.carrosel');
const images = document.querySelectorAll('.imagem');
const totalImages = images.length;
