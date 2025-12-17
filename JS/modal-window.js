document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeModal');

  function openModal() {
    overlay.style.display = 'block';
    modal.classList.add('open');
    // document.body.style.overflow = 'hidden'; // блокування скрол тіла
  }

  function closeModal() {
    overlay.style.display = 'none';
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Закриття по клавіші Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
});
