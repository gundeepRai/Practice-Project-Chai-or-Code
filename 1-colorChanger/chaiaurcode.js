const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function (btn) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // here e is event object
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});
