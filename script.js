// Navbar transparência ao scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#ffffff';
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// Música de fundo e botão play/pause arrastável
const audio = document.getElementById('background-audio');
const audioBtn = document.getElementById('audio-control');
const audioIcon = audioBtn.querySelector('i');

audioBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audioIcon.classList.replace('fa-play', 'fa-pause');
  } else {
    audio.pause();
    audioIcon.classList.replace('fa-pause', 'fa-play');
  }
});

// Tornar botão de música arrastável
audioBtn.onmousedown = function (event) {
  let shiftX = event.clientX - audioBtn.getBoundingClientRect().left;
  let shiftY = event.clientY - audioBtn.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    audioBtn.style.left = pageX - shiftX + 'px';
    audioBtn.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  audioBtn.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    audioBtn.onmouseup = null;
  };
};

audioBtn.ondragstart = function () {
  return false;
};
