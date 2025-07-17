window.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
  fadeElements.forEach(el => {
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
  });
});
