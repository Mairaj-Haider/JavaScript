function updateClock(){
  const now = new Date();

  const dayname = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Saturday"]
  const day = dayname[String(now.getDay())];
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes());
  const seconds = String(now.getSeconds());

  const timeString = `${day}  ${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;

  const dateday = String(now.getDate());
  const month = String(now.getMonth());
  const year = String(now.getFullYear());
  const dateString = `${dateday} ${month} ${year}`;
  document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClocklock();


