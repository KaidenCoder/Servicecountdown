// let countDownDate = new Date('Jan 16, 2022 10:00:00');

// var x = setInterval(function () {
//   let now = new Date().getTime();
//   let distance = countDownDate - now;
//   let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let sec = Math.floor((distance % (1000 * 60)) / 1000);
//   if (min < 10) {
//     min = '0' + min;
//   }
//   if (sec < 10) {
//     sec = '0' + sec;
//   }
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById('countdown').innerHTML = 'The service has started';
//   } else {
//     document.getElementById('countdown').innerHTML = `
//     <span>${min}</span> <span>${sec}</span>
//    `;
//   }
// }, 1000);

// setInterval();

var x = setInterval(function () {
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let AMPM = 'AM';
  if (hr < 10) {
    hr = '0' + hr;
  }
  if (hr >= 12) {
    AMPM = 'PM';
    hr = hr - 12;
    hr = '0' + hr;
  } else {
    AMPM = 'AM';
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  document.getElementById(
    'countdown'
  ).textContent = `${hr}:${min}:${sec} ${AMPM}`;
}, 1000);

let verses = [
  'Since it is written, “You shall be holy, for I am holy. 1 Peter 1:16',
  'Jesus Christ is the same yesterday and today and forever. Hebrews 13:8',
  'God is spirit, and those who worship him must worship in spirit and truth. John 4:24',
];

let idx = 0;
function randomVerse() {
  if (idx === verses.length) {
    idx = 0;
  }
  if (idx < verses.length) {
    document.getElementById('verse').innerHTML = verses[idx];
    idx++;
  }

  // let rand = Math.floor(Math.random() * verses.length);
}

setInterval(randomVerse, 7000);
