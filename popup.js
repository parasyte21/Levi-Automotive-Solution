const contactBtn = document.querySelector('.contact-button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-button');

if (contactBtn && popup && closeBtn) {
  contactBtn.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('data-href');
    if (!target) return;

    this.classList.add('pressed');
    setTimeout(() => {
      window.location.href = target;
    }, 150);
  });
});


