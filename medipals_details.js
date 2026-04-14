function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function switchImages() {
    document.getElementById('descriptionSet').classList.toggle('visible');
    document.getElementById('objectivesSet').classList.toggle('visible');
}

document.querySelectorAll(".openInfo").forEach(button => {
    button.addEventListener("click", () => {
        const infoId = button.getAttribute("data-info");
        const information = document.getElementById(infoId);

        // Close other open pop-ups
        document.querySelectorAll(".information").forEach(infoBox => {
            if (infoBox !== information) {
                infoBox.classList.remove("active");
                setTimeout(() => (infoBox.style.display = "none"), 200);
            }
        });

        if (information.classList.contains("active")) {
            information.classList.remove("active");
            setTimeout(() => (information.style.display = "none"), 200);
        } else {
            const buttonRect = button.getBoundingClientRect();
            const parentRect = button.offsetParent.getBoundingClientRect(); 

            information.style.top = `${button.offsetTop}px`;  
            information.style.left = `${button.offsetLeft + buttonRect.width + 10}px`; 

            information.style.display = "block";
            setTimeout(() => information.classList.add("active"), 10);
        }
    });
});

document.querySelectorAll(".closeInfo").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        const infoBox = closeBtn.parentElement;
        infoBox.classList.remove("active");
        setTimeout(() => (infoBox.style.display = "none"), 200);
    });
});

