const terminalLines = [
    "Pramysa System Version 2.1 Booting...",
    "Loading Food Categories: [Tajines, Grills, Pizza, Drinks]",
    "Fetching Prices from 515497279_1115114520639533_7542897483910377240_n.jpg...",
    "Syncing Cafe Menu from 518221688_1115114463972872_7586349935786577341_n.jpg...",
    "All Systems Go. Welcome to Roof Pramysa."
];

let lineIndex = 0;
const terminalContainer = document.getElementById('terminal-text');

function typeTerminal() {
    if (lineIndex < terminalLines.length) {
        let p = document.createElement('p');
        p.textContent = "> " + terminalLines[lineIndex];
        terminalContainer.appendChild(p);
        lineIndex++;
        setTimeout(typeTerminal, 400);
    } else {
        setTimeout(() => {
            document.getElementById('loader').style.transform = "translateY(-100%)";
        }, 800);
    }
}
window.onload = typeTerminal;

// Matrix Effect (نفس الكود السابق يعمل بكفاءة هنا)
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const chars = "PRAMYSA01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(10, 25, 47, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#64ffda";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 35);