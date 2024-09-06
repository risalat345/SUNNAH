const texts = [
  "GAMER",
  "BLOGER",
  "STUDENT"
];
let index = 0;
const element = document.getElementById('changeText');
function changeText() {
  element.textContent = texts[index];
  index = (index + 1) % texts.length;
}
setInterval(changeText, 1000);
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card,.scroll-image');
  const animateOnScroll = () => {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const cardHeight = card.offsetHeight;
      if (cardTop < windowHeight && cardTop + cardHeight > 0) {
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateX(100px)';
      }
    });
  };
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navItems = {
    home: document.getElementById('HOME'),
    about: document.getElementById('ABOUT'),
    experience: document.getElementById('EXPERIENCE'),
    projects: document.getElementById('PROJECTS'),
    skills: document.getElementById('SKILLS'),
    education: document.getElementById('EDUCATION')
  };
  function updateNavBackgroundColor() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        for (const key in navItems) {
          if (key === section.id) {
            navItems[key].classList.add('part-active');
          } else {
            navItems[key].classList.remove('part-active');
          }
        }
      }
    });
  }
  window.addEventListener('scroll', updateNavBackgroundColor);
  updateNavBackgroundColor();
});