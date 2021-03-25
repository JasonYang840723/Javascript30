function playSound(e) {
  let keyNo = e.keyCode || this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyNo}"]`);
  const key = document.querySelector(`.key[data-key="${keyNo}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle('playing');
}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSound);
});
window.addEventListener('keydown', playSound);
