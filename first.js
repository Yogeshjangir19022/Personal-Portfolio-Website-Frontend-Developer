// =========================
// Dynamic Year in Footer
// =========================
document.querySelector(".year").textContent = new Date().getFullYear();

// =========================
// Smooth Scroll for Nav Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =========================
// Contact Form Submit
// =========================
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Message Sent! Thank you for contacting me.");
  form.reset();
});

// =========================
// Scroll Reveal Animation
// =========================
const sections = document.querySelectorAll(".glass-section, .hero");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on page load
