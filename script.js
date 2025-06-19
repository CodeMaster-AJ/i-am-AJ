// Smooth fade on scroll
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll("section");
  for (let section of reveals) {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  }
});
