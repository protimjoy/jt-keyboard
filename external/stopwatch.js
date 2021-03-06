var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    total_time_in_second = 0,
    t;

function add() {
    seconds++;
    total_time_in_second++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();

    calculateWordPerMin(total_time_in_second);
    calculateNetWordPerMin(total_time_in_second);

}

function timer() {
    t = setTimeout(add, 1000);
}

var is_stopwatch_on = 0;
/* Start button */
start.onclick = function() {
    if(!is_stopwatch_on) timer();
    is_stopwatch_on++;
};

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
    is_stopwatch_on = 0;
}

/* Clear button */
clear.onclick = function() {
    clearTimeout(t);
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0, total_time_in_second = 0;
    clearAll();
}