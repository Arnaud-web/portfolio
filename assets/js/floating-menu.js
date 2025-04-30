// JS optionnel pour accessibilité + active menu
function setActiveMenu() {
  const sections = [
    {id: 'competences', selector: '#competences'},
    {id: 'projets', selector: '#projets'},
    {id: 'methodologie', selector: '#methodologie'},
    {id: 'contact', selector: 'footer'}
  ];
  const menuLinks = document.querySelectorAll('.floating-menu .menu-item');
  let activeFound = false;
  sections.forEach((section, idx) => {
    const sec = document.querySelector(section.selector);
    if (!sec) return;
    const rect = sec.getBoundingClientRect();
    if (!activeFound && rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/4) {
      menuLinks.forEach(link => link.classList.remove('active'));
      if(menuLinks[idx]) menuLinks[idx].classList.add('active');
      activeFound = true;
    }
  });
  if (!activeFound) {
    menuLinks.forEach(link => link.classList.remove('active'));
  }
}
window.addEventListener('scroll', setActiveMenu);
window.addEventListener('resize', setActiveMenu);
document.addEventListener('DOMContentLoaded', setActiveMenu);
// accessibilité focus
document.querySelectorAll('.floating-menu .menu-item').forEach(item => {
  item.addEventListener('focus', () => {
    item.classList.add('focus');
  });
  item.addEventListener('blur', () => {
    item.classList.remove('focus');
  });
});
