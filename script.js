document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const menuPanel = document.getElementById("menuPanel");
  const toggle = document.getElementById("themeToggle");
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  /* MENU */
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
    menuPanel.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    menuPanel.classList.remove("open");
  });

  /* THEME */
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light")
      ? "🌞"
      : "🌙";
  });

  /* EMAILJS INIT */
  emailjs.init("fpW1zkgreuFtYR8_q");

  /* CONTACT FORM */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#aaa";

    emailjs
      .send("service_8ygco5u", "template_8c9pnbe", {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      })
      .then(() => {
        status.textContent = "Message sent successfully 🚀";
        status.style.color = "#4CAF50";
        form.reset();
      })
      .catch((error) => {
        status.textContent = "Failed to send message ❌";
        status.style.color = "#ff4d4d";
        console.error("EmailJS Error:", error);
      });
  });
});

const launch = document.getElementById("launch");

window.addEventListener("load", () => {
  let count = 3;
  const countdown = setInterval(() => {
    launch.textContent = count > 0
  ? `Preparing launch in ${count}...`
  : "🚀 Ignition!";

    count--;

    if (count < 0) {
      clearInterval(countdown);

      launch.textContent = "Launching...";
      const loader = document.getElementById("loader");
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, 1000); 
});



