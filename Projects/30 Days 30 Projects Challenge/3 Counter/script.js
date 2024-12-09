let display_value = document.querySelector('#display-screen');

let increase = document.querySelector('#increase-button');
increase.addEventListener('click',function(){
  let currentvalue = (display_value.value);
  currentvalue++;
  display_value.value = currentvalue;
});

let decrease = document.querySelector('#decrease-button');
decrease.addEventListener('click',function(){
  let currentvalue = (display_value.value);
  currentvalue--;
  display_value.value = currentvalue;
});
let reset = document.querySelector('#reset-button');
reset.addEventListener('click',function(){
  let currentvalue = (display_value.value);
  currentvalue = '';
  display_value.value = currentvalue;
});