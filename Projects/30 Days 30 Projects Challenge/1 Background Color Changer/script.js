const buttons = document.querySelectorAll('button');
const bodyy = document.querySelector('body');

buttons.forEach(function(button){
  button.addEventListener('click', function(e)
{
  if(e.target.id === 'red'){
    bodyy.style.backgroundColor = e.target.id;
    bodyy.style.color = 'white';
  }
  if(e.target.id === 'blue'){
    bodyy.style.backgroundColor = e.target.id;
    bodyy.style.color = 'white';
  }
  if(e.target.id === 'yellow'){
    bodyy.style.backgroundColor = e.target.id;
    bodyy.style.color = 'black';
  }
  if(e.target.id === 'green'){
    bodyy.style.backgroundColor = e.target.id;
    bodyy.style.color = 'white';
  }
  if(e.target.id === 'black'){
    bodyy.style.backgroundColor = e.target.id;
    bodyy.style.color = 'white';
  }
  if(e.target.id === 'white'){
    bodyy.style.backgroundColor = e.target.id;
    bodyy.style.color = 'black';
  }
});
});


