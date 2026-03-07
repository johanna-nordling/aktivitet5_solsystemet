const btn = document.getElementById("enterBtn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  btn.classList.add("zoom");
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = btn.href;
  }, 800); // matchar fade-out
});