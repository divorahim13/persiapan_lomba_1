const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const close = document.getElementById('tutup');

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
})

tutup.addEventListener('click', () => {
    navMenu.classList.add('hidden')
})