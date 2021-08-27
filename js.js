const display = document.getElementById("clock");

function updateTime() {
    const date = new Date();

    const hours =   formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

setInterval(updateTime, 1000);