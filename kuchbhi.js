// 1. THEME TOGGLE
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// 2. GREETING
function setGreeting() {
    const hour = new Date().getHours();
    let greet = "Assalamualaikum";
    if (hour < 12) greet = "Good Morning ☀️";
    else if (hour < 17) greet = "Good Afternoon 🌤️";
    else if (hour < 21) greet = "Good Evening 🌆";
    else greet = "Good Night 🌙";
    document.getElementById("greeting").textContent = greet;
}
setGreeting();

// 3. CLOCK
function updateClock() {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 4. TYPING EFFECT
const nameText = "Hasnain Shaikh";
const nameEl = document.getElementById("name");
let i = 0;
nameEl.textContent = "";
function typeName() {
    if (i < nameText.length) {
        nameEl.textContent += nameText.charAt(i);
        i++;
        setTimeout(typeName, 100);
    }
}
typeName();