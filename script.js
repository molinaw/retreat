const password = 'calima';

const submitButton = document.getElementById('submit-button');
const passwordInput = document.getElementById('password-input');
const passwordPrompt = document.getElementById('password-prompt');
const videoContainer = document.getElementById('video-container');
const myVideo = document.getElementById('my-video');

submitButton.addEventListener('click', () => {
  const userPassword = passwordInput.value;

  if (userPassword === password) {
    passwordPrompt.style.display = 'none';
    videoContainer.style.display = 'flex';
    myVideo.play();
  } else {
    alert('Incorrect password!');
  }
});
