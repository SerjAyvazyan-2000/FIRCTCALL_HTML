
function handleScroll() {
    const elements = document.querySelectorAll('.scroll-element');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;
    const pathElement = document.getElementById("pathElement");
    const pathElementSmall = document.getElementById("pathElementSmall");
    if(pathElement && pathElementSmall) {
        pathElement.style.strokeDashoffset = scrollY;
        pathElementSmall.style.strokeDashoffset = scrollY;
    }


});

document.addEventListener("DOMContentLoaded", function () {

    const rotateLogo = document.getElementById('rotateLogo');
    const rotateLogo1 = document.getElementById('rotateLogo1');
    if(rotateLogo && rotateLogo1){
        window.addEventListener('scroll', function () {
            const rotation = window.scrollY / 10;

            rotateLogo.style.transform = `rotate(${rotation}deg)`;
            rotateLogo1.style.transform = `rotate(${rotation}deg)`;
        });
    }

});





