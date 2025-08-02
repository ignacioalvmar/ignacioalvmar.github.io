document.addEventListener('DOMContentLoaded', () => {
  const storageKey = 'theme';
  const toggle = document.getElementById('theme-toggle');
  const sunIcon = toggle?.querySelector('.sun-icon');
  const moonIcon = toggle?.querySelector('.moon-icon');
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (sunIcon) sunIcon.style.display = 'inline';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      root.removeAttribute('data-theme');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'inline';
    }
  }

  function getPreferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      return stored;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  let currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  toggle?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, currentTheme);
    applyTheme(currentTheme);
  });
});
