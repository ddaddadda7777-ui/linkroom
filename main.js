document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.header__logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/';
    });
  }
});
