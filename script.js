const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  console.log(visibility);
});

