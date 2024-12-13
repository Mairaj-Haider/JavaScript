let aplus = document.querySelector('#a-plus');
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let e = document.querySelector('#e');
let f = document.querySelector('#f');
let grade = document.querySelector('.input-value');
let data = document.querySelector('#enter-input');
data.addEventListener('click', function (){
  let marks = parseInt(grade.value);

  if (marks > 100){
    alert ('please enter correct percentage')
  }
  else if(marks >= 90){
    aplus.style.backgroundColor = 'red';
    aplus.style.color = 'white';
  }
  else if(marks >= 80){
    a.style.backgroundColor = 'green';
    a.style.color = 'white';
  }
  else if(marks >= 70){
    b.style.backgroundColor = 'blue';
    b.style.color = 'white';
  }
  else if(marks >= 60){
    c.style.backgroundColor = 'chocolate';
    c.style.color = 'white';
  }
  else if(marks >= 50){
    d.style.backgroundColor = 'darkblue';
    d.style.color = 'white';
  }
  else if(marks >= 40){
    e.style.backgroundColor = 'grey';
    e.style.color = 'white';
  }
  else{
    f.style.backgroundColor = 'black';
    f.style.color = 'white';
  }
});