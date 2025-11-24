// Smooth scroll effect when loading page
window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
        heroText.style.opacity = "1";
        heroText.style.transform = "translate(-50%, -50%) scale(1)";
    }
});

// Scroll animation for content sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".content, .card").forEach((el) => observer.observe(el));


// Ripple effect buttons
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - btn.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - btn.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = btn.getElementsByClassName("ripple")[0];
        if (ripple) ripple.remove();
        btn.appendChild(circle);
    });
});