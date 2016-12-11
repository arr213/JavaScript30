// Drum Kit JS
console.log('Hello JS30.');

window.addEventListener('keydown', function(event) {
  const keyCode = event.keyCode;
  const buttonEl = document.querySelector(`div[data-key="${keyCode}"]`);
  const audioEl = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();
    buttonEl.classList.add('playing');
  }

});

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', function(event){
  if (event.propertyName === 'transform') {
    key.classList.remove('playing');
  }
}));

