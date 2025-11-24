// Message when clicking "Explore Now" button
function showMessage() {
  alert("Welcome to Uganda! Start and enjoy exploring the Pearl of Africa.");
}

// Form submission alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for contacting us! We’ll get back to you soon.");
      form.reset();
    });
  }
});
