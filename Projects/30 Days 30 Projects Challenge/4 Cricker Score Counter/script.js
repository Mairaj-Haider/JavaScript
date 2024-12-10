let runs = document.querySelector('#display-screen');
let wickets = document.querySelector('#display-screen-two');



let one = document.querySelector('#one');
one.addEventListener('click', function(){
  let oneValue = (runs.value);
  oneValue++;
  runs.value = oneValue;
});


let two = document.querySelector('#two');
two.addEventListener('click', function(){
  let twoValue = parseInt(runs.value) || 0;
  twoValue += 2;
  runs.value = twoValue;
});

let three = document.querySelector('#three');
three.addEventListener('click', function(){
  let threeValue = parseInt(runs.value) || 0;
  threeValue += 3;
  runs.value = threeValue;
});

let wide = document.querySelector('#wide');
wide.addEventListener('click', function(){
  let wideValue = parseInt(runs.value) || 0;
  wideValue++;
  runs.value = wideValue;
});

let four = document.querySelector('#four');
four.addEventListener('click', function(){
  let fourValue = parseInt(runs.value) || 0;
  fourValue += 4;
  runs.value = fourValue;
});

let six = document.querySelector('#six');
six.addEventListener('click', function(){
  let sixValue = parseInt(runs.value) || 0;
  sixValue += 6;
  runs.value = sixValue;
});

let out = document.querySelector('#out');
out.addEventListener('click', function(){
  let outValue = parseInt(wickets.value.replace('/', '')) || 0;
  outValue++;
  wickets.value = '/' + outValue ;

  if(wickets.value === '/10'){
    alert(`All out! Your team's final score is ${runs.value}. Well played!`);
    runs.value = '';
    wickets.value = '';
  }
});

let reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
  let displays = document.querySelectorAll('.input-screen');
  displays.forEach(displayValue => {displayValue.value = '';});

});


