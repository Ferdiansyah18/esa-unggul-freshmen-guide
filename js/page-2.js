const navbar1 = document.getElementById('navbar-1');
const navbar2 = document.getElementById('navbar-2');

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 30) {
        navbar1.classList.add('navbar-scrolled');
        navbar2.classList.remove('navbar-scrolled');
    } else {
        navbar1.classList.remove('navbar-scrolled');
        navbar2.classList.add('navbar-scrolled');
    }
});

function menuButton() {
    navbar1.classList.toggle('pressed');
}