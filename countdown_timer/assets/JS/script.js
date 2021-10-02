// Wait for window load
$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
    countDownTimerApp();
});


function countDownTimerApp() {

const FULL_DASH_ARRAY = [283];

let TIME_LIMIT = 0;
let TIME_HISTORY = 0;
let audio = new Audio("https://bigsoundbank.com/UPLOAD/mp3/0035.mp3");

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

// Implement timer interval 
let timerInterval = null;
let editBtn = document.getElementById("btn-edit");
let pauseBtn = document.getElementById("btn-pause");
let playBtn = document.getElementById("btn-play");
let sndBtn = document.getElementById("btn-sound");
let muteBtn = document.getElementById("btn-mute");
let addBtn = document.getElementById("btn-add");
let resetBtn = document.getElementById("btn-reset");
let stopBtn = document.getElementById("btn-stop");
let delBtn = document.getElementById("btn-del");

let isPaused = false;

document.getElementById("app").innerHTML = `...Loading...`
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283 283"
        class="base-timer__path-remaining"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTime(timeLeft)}
  </span>
</div>
`;

function getTime() {
    // Ask for minutes -  if non leave as 0
    let mins = Number(prompt("Enter Minutes Below (Cannot be less than 0)")) * 60;
    // Ask for seconds - if non leave as 0
    let secs = Number(prompt("Enter Seconds Below (Cannot be less than 0)"));
    if (!(mins || secs)) {
        resetTimeBtn();
        return;
    } else if (isNaN(mins || secs)) {
        alert("Not a number. Try again or hit 'Cancel'.")
        getTime();
    } else {
        addBtn.style.display = "none";
        editBtn.style.display = "inline";
        TIME_LIMIT = mins += secs;
        TIME_HISTORY = TIME_LIMIT;
        timeLeft = TIME_LIMIT;
        console.log(TIME_HISTORY);
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        isPaused = true;
        pauseBTN();
        startTimer();
    }

}

function editedBTN() {
    clearInterval(timerInterval);
    TIME_LIMIT = 0;
    timePassed = 0;
    isPaused = false;
    getTime();
}

function playBTN() {
    isPaused = false;
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}

function pauseBTN() {
    isPaused = true;
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline";
    audio.pause();
}

function soundBTN() {
    sndBtn.style.display = "none";
    muteBtn.style.display = "inline";
    audio.muted = true;
}
function mutedBTN() {
    muteBtn.style.display = "none";
    sndBtn.style.display = "inline";
    audio.muted = false;
}

function resetTimeBtn() {
    document.querySelector('html').style.cursor = "progress";
    document.querySelector('button').style.cursor = "progress";
    setTimeout(() => {
        document.querySelector('html').style.cursor = "default";
    document.querySelector('button').style.cursor = "default";
    }, 2000)
    clearInterval(timerInterval);
    TIME_LIMIT = TIME_HISTORY;
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    addBtn.style.display = "none";
    resetBtn.style.display = "none";
    editBtn.style.display = "inline";
    isPaused = true;
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline";
    startTimer();
}




function formatTime(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    let minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${minutes}:${seconds}`;
}


// Divides time left by the defined time limit.
function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

function startTimer() {
    resetBtn.style.display = "inline";
    delBtn.style.display = "inline";
    if (TIME_LIMIT <= timePassed) {
        clearInterval(timerInterval);
    } else {
        timerInterval = setInterval(() => {
            if (!isPaused) {
                // The amount of time passed increments by one
                timePassed = timePassed += 1;
                timeLeft = TIME_LIMIT - timePassed;
            }


            // The time left label is updated
            document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);

            setCircleDasharray();

            if (TIME_LIMIT === timePassed) {
                clearInterval(timerInterval);
                timePassed = 0;
                audio.play();
                pauseBtn.style.display = "none";
                playBtn.style.display = "none";
                editBtn.style.display = "none";
                addBtn.style.display = "inline";
                stopBtn.style.display = "inline";
                resetBtn.style.display = "inline";
                setTimeout(() => {
                    stopBtn.style.display = "none";
                }, 21000)
            }
        }, 1000);
    }

}


editBtn.addEventListener("click", () => {
    editedBTN();
})
pauseBtn.addEventListener("click", () => {
    pauseBTN();
})
playBtn.addEventListener("click", () => {
    playBTN();
})
addBtn.addEventListener("click", () => {
    getTime();
})
sndBtn.addEventListener("click", () => {
    soundBTN();
})
muteBtn.addEventListener("click", () => {
    mutedBTN();
})
stopBtn.addEventListener("click", () => {
    audio.pause();
    stopBtn.style.display = "none";
})
resetBtn.addEventListener("click", () => {
    resetTimeBtn();
})
delBtn.addEventListener("click", () => {
    window.location.reload();
})

}

