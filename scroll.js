document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const mainSection = document.getElementById('main');

    scrollToTopButton.addEventListener('click', function () {
        mainSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.style.display = 'block';
});
