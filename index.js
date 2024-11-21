let target;
let element;
let currentIndex = 0;

function animate() {
    if (currentIndex < target.length) {
        element.textContent += target[currentIndex];
        currentIndex++;
    }
    if (currentIndex >= target.length) {
        currentIndex = 0;
        element.textContent = target;
        setTimeout(() => {
            element.textContent = '';
            animate();
        }, 2000);
    } else
        setTimeout(animate, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    element = document.getElementById("header-title");
    target = element.textContent;
    element.textContent = '';
    animate();
});