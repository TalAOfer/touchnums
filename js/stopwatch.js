
var miliseconds = 0;
var seconds = 0;

var displayMiliseconds = 0;

var interval = null;

function stopWatch() {

    miliseconds++;

    if (miliseconds / 1000 === 1) {
        miliseconds = 0;
        seconds++;
    }

    if (miliseconds < 10) {
        displayMiliseconds = "00" + miliseconds.toString();
    } else if (miliseconds < 100) {
        displayMiliseconds = "0" + miliseconds.toString();
    } else {
        displayMiliseconds = miliseconds;
    }

    

    document.querySelector("div").innerHTML = seconds + ":" + displayMiliseconds;

}




function resetTimer() {

    window.clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    document.querySelector("div").innerHTML = "0:000";

}