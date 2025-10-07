let clock = document.querySelector('#clock');

setInterval(function(){
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
    // here i was mistakely using tolocaleString() which gives date also along with time
}, 1000);