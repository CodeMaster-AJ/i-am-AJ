document.addEventListener("keydown", (e) => {
  if (e.key === "j" || e.key === "J") {
    const term = document.getElementById("terminal");
    term.style.display = term.style.display === "block" ? "none" : "block";
  }
});
