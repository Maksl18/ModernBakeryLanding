document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('mobileMenu');
  const openBtn = document.querySelector('.mobile-menu-toggle');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const links = menu.querySelectorAll('a');

  function openMenu() {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  menu.addEventListener('click', e => {
    if (e.target === menu) {
      closeMenu();
    }
  });
});
