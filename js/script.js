// 1. Terminal Animation - تأثير الـ تيرمينال عند التحميل
const terminalLines = [
    "Initializing Pramysa Onboard Computer...",
    "Scanning Ocean Depth...",
    "Heating Ovens and Grills...",
    "Anchor Secured. Systems Online.",
    "Welcome to the Future of Dining."
];

let lineIndex = 0;
const terminalContainer = document.getElementById('terminal-text');

function typeTerminal() {
    if (lineIndex < terminalLines.length) {
        let p = document.createElement('p');
        p.textContent = "> " + terminalLines[lineIndex];
        terminalContainer.appendChild(p);
        lineIndex++;
        setTimeout(typeTerminal, 500);
    } else {
        // إخفاء الـ Loader بعد الانتهاء
        setTimeout(() => {
            document.getElementById('loader').style.transform = "translateY(-100%)";
        }, 800);
    }
}

// تشغيل الـ Terminal بمجرد تحميل الصفحة
window.onload = typeTerminal;


// 2. Matrix Rain Effect - تأثير المطر البرمجي خلف الموقع
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
    
    ctx.fillStyle = "#64ffda"; // لون النيون سيان
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// تحديث الـ Matrix كل 35 مللي ثانية ليكون انسيابياً
setInterval(drawMatrix, 35);

// إعادة ضبط مقاس الـ Canvas إذا تغير حجم الشاشة
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});