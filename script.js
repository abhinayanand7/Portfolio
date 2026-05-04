// Smooth scroll button
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Navbar smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Card click interaction
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Project details coming soon!");
  });
});

// Typing Animation
const texts = [
  "Full Stack Developer 🚀",
  "Problem Solver 🧠",
  "Passionate Learner 👨‍💻",
  "Tech Enthusiast ⚡"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
  const typingElement = document.getElementById("typing");
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeAnimation, 2000);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeAnimation, isDeleting ? 50 : 100);
}

typeAnimation();

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") || "dark-mode";

document.body.classList.add(savedTheme);
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const currentTheme = document.body.classList.contains("light-mode") ? "light-mode" : "dark-mode";
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
}