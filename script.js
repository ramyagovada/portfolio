window.addEventListener("load", () => {
    document.querySelector(".html").style.width = "95%";
    document.querySelector(".css").style.width = "90%";
    document.querySelector(".js").style.width = "80%";
    document.querySelector(".bootstrap").style.width = "85%";

    document.querySelector(".wordpress").style.width = "90%";
    document.querySelector(".figma").style.width = "85%";
    document.querySelector(".canva").style.width = "90%";
    document.querySelector(".social").style.width = "80%";
});
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();

let particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
}));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();
window.addEventListener("resize", resize);
