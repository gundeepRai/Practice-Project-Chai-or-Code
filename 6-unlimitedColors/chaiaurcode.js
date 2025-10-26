const strt = document.querySelector('#start');
const stp = document.querySelector('#stop');
let colorIntervalId;

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let clr = '#';

  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * 16); // a random index [0, 15] is generated
    clr += hex[idx];
  }

  return clr;
};

strt.addEventListener('click', function () {
  if (!colorIntervalId) {
    colorIntervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stp.addEventListener('click', function () {
  clearInterval(colorIntervalId);
  colorIntervalId = null;
  document.body.style.backgroundColor = '#222333';
});
