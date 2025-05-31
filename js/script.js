// Dark/Light Mode
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  saveTheme();
});

function saveTheme() {
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
}
loadTheme();

// Música Play/Pause
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '⏸️';
  } else {
    music.pause();
    musicBtn.textContent = '▶️';
  }
});

music.play();

// Bordas RGB
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let colorIndex = 0;

function changeBorderColor() {
  document.body.style.setProperty('--border-color', colors[colorIndex]);
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeBorderColor, 3000);
