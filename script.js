const sections = document.querySelectorAll('.section');

// TODO: For more complex scripts, consider breaking down functionality into smaller, reusable functions or modules.
const revealSections = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);