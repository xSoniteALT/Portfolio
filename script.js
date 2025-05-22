// Add any cool JS interactions here (like toggle themes, modals, etc.)
console.log("Welcome to the portfolio!");
// Make the glow headings gently brighten on mouse move near them

const glowElements = document.querySelectorAll('.glow');

glowElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    el.classList.remove('hovered');
  });
});
