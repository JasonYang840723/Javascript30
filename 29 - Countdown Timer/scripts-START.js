const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let countdown;
function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  //then代表現在的時間加上我們想要"倒數多少秒"*1000是因為now是以ms為單位，我們想要藉由Date API來做倒數的運算，因為他說setInterval有許多問題。
  displayTimeLeft(seconds);
  displayEndTime(then);
  //馬上顯示輸入的秒數，因為serInterval會延遲一秒觸發

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}
function displayTimeLeft(seconds) {
  let mins = Math.floor(seconds / 60);
  let second = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  //因為秒數小於0之後會直接指輸出個位數，然而我們希望前面有0。
  document.title = display;
  timerDisplay.textContent = display;
}
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? '0' : ''
  }${minutes}${hour > 12 ? 'pm' : 'am'}`;
}
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
var foreach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
foreach([1, 2, 3, 4, 5, 6, 7], function (item, index, array) {
  let biggest = array.reduce((big, value) => {
    return (big = value > big ? value : big);
  }, (big = array[0]));
  console.log(item);
  console.log(`The biggest is ${biggest}`);
});
buttons.forEach((button) => button.addEventListener('click', startTimer));

//document可以直接選擇有name attribute的元素!!!
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
