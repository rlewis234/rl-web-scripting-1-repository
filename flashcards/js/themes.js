const themeSelector = document.getElementById('theme-selector');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeSelector.value = savedTheme;
}

themeSelector.addEventListener('change', (event) => {
  const theme = event.target.value;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});