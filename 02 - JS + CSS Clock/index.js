console.log('JS + CSS Clock');

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

setInterval(function(){

  let now = new Date();

  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hDeg = hours * 30 + 90;
  let mDeg = minutes * 6 + 90;
  let sDeg = seconds * 6 + 90;

  hourHand.style.transform = `rotate(${hDeg}deg)`;
  minuteHand.style.transform = `rotate(${mDeg}deg)`;
  secondHand.style.transform = `rotate(${sDeg}deg)`;

}, 1000);

