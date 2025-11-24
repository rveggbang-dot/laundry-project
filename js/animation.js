document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".price-box");

    boxes.forEach((box, i) => {
        setTimeout(() => {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, 200 * i);
    });
});
