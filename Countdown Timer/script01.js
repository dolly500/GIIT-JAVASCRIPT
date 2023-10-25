function updateCountdown(){
    const targetDate = new Date("2023-12-31 23:59:59").getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

const days = Math.floor(timeRemaining / (1000*60*60*24))
const hours = Math.floor((timeRemaining % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60))
const seconds = Math.floor((timeRemaining % (1000 * 60))/ 1000)


document.getElementById("days").innerHTML = formatTime(days)

document.getElementById("hours").innerHTML = formatTime(hours)

document.getElementById("minutes").innerHTML = formatTime(minutes)

document.getElementById("seconds").innerHTML = formatTime(seconds)

}

function formatTime(time){
    // return time < 10 ? "0" + time : time;
    if (time<10){
        return "0" + time;
    }
    else {
        return time.toString();
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
