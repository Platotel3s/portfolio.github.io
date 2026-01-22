const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  themeIcon.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
if (window.matchMedia) {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  if (!localStorage.getItem('theme')) {
    if (prefersDarkScheme.matches) {
      document.body.classList.remove('light-mode');
      themeIcon.textContent = '🌙';
    } else {
      document.body.classList.add('light-mode');
      themeIcon.textContent = '☀️';
    }
  }
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
      } else {
        document.body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
      }
    }
  });
}
