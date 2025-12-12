document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeModal');

  function openModal() {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    // document.body.style.overflow = 'hidden'; // блокування скрол тіла
  }

  function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal); // закрити кліком по затемненню

  // Закриття по клавіші Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
});
