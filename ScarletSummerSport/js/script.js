document.addEventListener("DOMContentLoaded", function () {
    // Button Hover and Click Animations using GSAP
    document.querySelectorAll('button').forEach(button => {
        // Hover effect (scale up)
        button.addEventListener('mouseenter', function () {
            gsap.to(button, { duration: 0.3, scale: 1.1 });
        });

        // Mouse leave effect (scale back)
        button.addEventListener('mouseleave', function () {
            gsap.to(button, { duration: 0.3, scale: 1 });
        });

        // Click effect (scale down)
        button.addEventListener('mousedown', function () {
            gsap.to(button, { duration: 0.2, scale: 0.9 });
        });

        // Release effect (scale back up slightly)
        button.addEventListener('mouseup', function () {
            gsap.to(button, { duration: 0.2, scale: 1.1 });
        });
    });
});
