let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

const display = document.getElementById("display");

function updateDisplay(){

    let m = String(minutes).padStart(2,"0");
    let s = String(seconds).padStart(2,"0");
    let ms = String(milliseconds).padStart(2,"0");

    display.innerText = `${m} : ${s} : ${ms}`;
}

function startStopwatch(){

    if(timer !== null){
        return;
    }

    timer = setInterval(() => {

        milliseconds++;

        if(milliseconds === 100){
            milliseconds = 0;
            seconds++;
        }

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    },10);
}

function pauseStopwatch(){

    clearInterval(timer);
    timer = null;
}

function resetStopwatch(){

    clearInterval(timer);

    timer = null;

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();
}

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }
});