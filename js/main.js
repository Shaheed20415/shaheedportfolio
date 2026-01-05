
const roles = ["Java Developer", "Full-Stack Developer", "Problem Solver", "Web Developer"];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleSpan = document.getElementById("typing-role");

function typeLoop() {
  if (!roleSpan) return;
  const current = roles[roleIndex];
  if (!deleting) {
    roleSpan.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    roleSpan.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 70 : 110);
}

document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});




const overlay = document.getElementById("popup-overlay");
const popups = document.querySelectorAll(".popup-box");

function closeAllPopups() {
  popups.forEach(p => p.classList.remove("active"));
  overlay.classList.remove("active");
}

// OPEN POPUP
document.querySelectorAll(".interest-card").forEach(card => {
  card.addEventListener("click", () => {

    const popupId = "popup-" + card.dataset.popup;

    // Close open popups
    closeAllPopups();

    // Restart animation
    const popup = document.getElementById(popupId);
    popup.style.animation = "none";
    popup.offsetHeight; 
    popup.style.animation = "";

    // Show new popup
    popup.classList.add("active");
    overlay.classList.add("active");
  });
});

// CLOSE POPUPS
overlay.addEventListener("click", closeAllPopups);
document.querySelectorAll(".close-popup").forEach(btn =>
  btn.addEventListener("click", closeAllPopups)
);

// ESC KEY CLOSE
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeAllPopups();
});




popups.forEach(p => p.style.animation = "none");
void document.getElementById(popupId).offsetWidth; // restart animation
document.getElementById(popupId).style.animation = "";



