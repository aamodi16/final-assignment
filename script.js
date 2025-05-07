
window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (btn) {
      btn.style.display = window.scrollY > 100 ? "block" : "none";
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTop");
    if (btn) {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    const images = document.querySelectorAll(".zoom-image");
    images.forEach(img => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
      });
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    });
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const message = form.elements["message"].value.trim();
        if (!name || !email || !message) {
          e.preventDefault();
          alert("Please fill in all fields.");
        } else if (!email.includes("@") || !email.includes(".")) {
          e.preventDefault();
          alert("Please enter a valid email address.");
        }
      });
    }
    const reviews = document.querySelectorAll(".review");
    let currentReview = 0;
    if (reviews.length > 0) {
      setInterval(() => {
        reviews.forEach((r, i) => {
          r.style.display = i === currentReview ? "block" : "none";
        });
        currentReview = (currentReview + 1) % reviews.length;
      }, 4000); 
    }
  
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active-link");
      }
    });
  
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  