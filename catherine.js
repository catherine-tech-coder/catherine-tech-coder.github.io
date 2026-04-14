function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.querySelector('nav a[href="javascript:void(0)"]').addEventListener('click', function () {
    const animatedElements = document.querySelectorAll('.animate__animated');

    animatedElements.forEach(element => {
        element.classList.remove('animate__slideInDown', 'animate__slideInUp', 'animate__slideInLeft', 'animate__slideInRight');
        void element.offsetWidth; 
        element.classList.add('animate__animated', 'animate__slideInUp');
    });
});


