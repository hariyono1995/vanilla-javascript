const countDays = document.getElementById("days");
const countHours = document.getElementById("hours");
const countMinutes = document.getElementById("minutes");
const countSeconds = document.getElementById("seconds");

const newYear = new Date("2023-1-1");

const countdownNewYear = () => {
  const firstDate = newYear;
  const currentDate = new Date();

  let intervalTime = firstDate - currentDate;

  const totalSeconds = intervalTime / 1000;

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  countDays.innerHTML = formatTime(days);
  countHours.innerHTML = formatTime(hours);
  countMinutes.innerHTML = formatTime(minutes);
  countSeconds.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
//  initial call
countdownNewYear();

setInterval(countdownNewYear, 1000);
