let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function updateDisplay(){
  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = `${String(hours)}:${String(minutes)}:${String(seconds)}`;
};

function start(){
  if (!timer) {
    timer = setInterval(() => {
      seconds++
      if (seconds === 60){
        seconds = 0;
        minutes++;
      };
      if (minutes === 60){
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    
  }
}

function stop(){
  clearInterval (timer);
  timer = null;
}

function reset(){
  hours = 0;
  minutes = 0;
  seconds = 0;

  updateDisplay();
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener('click', stop);
document.getElementById("reset").addEventListener('click', reset)