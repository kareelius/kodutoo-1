console.log("fail töötab");

let fontSize = 80;
let darkMode = true;

// kell
function updateClock() {
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById("hours").innerHTML = h + ":";
    document.getElementById("minutes").innerHTML = m + ":";
    document.getElementById("seconds").innerHTML = s;
}

// kuupäev
function updateDate() {
    let now = new Date();

    let d = now.getDate();
    let mo = now.getMonth() + 1;
    let y = now.getFullYear();
    let w = now.getDay();

    let wd = "";

    if (w == 0) wd = "Pühapäev";
    if (w == 1) wd = "Esmaspäev";
    if (w == 2) wd = "Teisipäev";
    if (w == 3) wd = "Kolmapäev";
    if (w == 4) wd = "Neljapäev";
    if (w == 5) wd = "Reede";
    if (w == 6) wd = "Laupäev";

    if (d < 10) d = "0" + d;
    if (mo < 10) mo = "0" + mo;

    document.getElementById("day").innerHTML = d + ".";
    document.getElementById("month").innerHTML = mo + ".";
    document.getElementById("year").innerHTML = y;
    document.getElementById("weekday").innerHTML = wd;
}

// suurem
function bigger() {
    fontSize = fontSize + 5;
    document.getElementById("clockContainer").style.fontSize = fontSize + "px";
}

// väiksem
function smaller() {
    fontSize = fontSize - 5;
    document.getElementById("clockContainer").style.fontSize = fontSize + "px";
}

// värv
function changeColor() {
    document.getElementById("clockContainer").style.color = "red";
}

// taust
function changeBackground() {
    if (darkMode == true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkMode = true;
    }
}

// font
function changeFont() {
    document.body.style.fontFamily = "Courier New";
}

// reset
function resetAll() {
    location.reload();
}

// eventid
document.getElementById("bigger").addEventListener("click", bigger);
document.getElementById("smaller").addEventListener("click", smaller);
document.getElementById("colorChange").addEventListener("click", changeColor);
document.getElementById("bgChange").addEventListener("click", changeBackground);
document.getElementById("fontChange").addEventListener("click", changeFont);
document.getElementById("reset").addEventListener("click", resetAll);

// käivitus
updateClock();
updateDate();

setInterval(updateClock, 1000);
setInterval(updateDate, 60000);