let day = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const updatecountDown = (deadline) => {
    const currenttime = new Date();
    const timedifference = deadline - currenttime; // milesecs
    // culculate days mins hour and sec
    let calsec = Math.floor(timedifference/1000) % 60;
    let calmin = Math.floor(timedifference/1000/60) % 60;
    let calhour = Math.floor(timedifference/1000/60/60) % 24;
    let calday = Math.floor(timedifference/1000/60/60/24);
    

    day.textContent = formatTime(calday);
    hour.textContent = formatTime(calhour);
    min.textContent = formatTime(calmin);
    sec.textContent = formatTime(calsec);
}

const countDown = (targetdate) => {
    setInterval(() => updatecountDown(targetdate), 1000);
}

const targetdate = new Date("july 30 2024");
countDown(targetdate);
