// Loader logic
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
      app.classList.remove("hidden");
      app.classList.add("show");
    }, 500);

  }, 2500); // ⏳ loader duration
});


// Accordion toggle logic (your original code)
document.querySelectorAll(".proof-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");
    const isOpen = content.style.display === "block";

    document.querySelectorAll(".proof-content").forEach(c => c.style.display = "none");
    document.querySelectorAll(".proof-toggle span").forEach(s => s.textContent = "+");

    if (!isOpen) {
      content.style.display = "block";
      icon.textContent = "−";
    }
  });
});
