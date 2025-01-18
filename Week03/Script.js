document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const navbar = document.getElementById('navbar');
    const footer = document.querySelector('footer');
    const contactingSection = document.getElementById('contacting');
    const headerBottom = header.getBoundingClientRect().bottom;
    const contactingTop = contactingSection.getBoundingClientRect().top;

    if (headerBottom <= 0) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }

    if (contactingTop <= window.innerHeight) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});