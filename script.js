document.addEventListener("DOMContentLoaded", function () {
    const mouseTrail = document.getElementById("mouse-trail");

    document.addEventListener("mousemove", function (event) {
        createTrailDot(event.pageX, event.pageY);
    });

    function createTrailDot(x, y) {
        const trailDot = document.createElement("div");
        trailDot.className = "trail-dot";
        trailDot.style.left = x + "px";
        trailDot.style.top = y + "px";
        mouseTrail.appendChild(trailDot);

        // Remove the dot after a certain duration (e.g., 1 second)
        setTimeout(() => {
            mouseTrail.removeChild(trailDot);
        }, 950);
    }
});