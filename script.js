let startBtn = document.querySelector(".start-btn")
let stopBtn = document.querySelector(".stop-btn")
let resetBtn = document.querySelector(".reset-btn")
let secondsContainer = document.querySelector(".seconds")
let minutesContainer = document.querySelector(".minutes")
let hoursContainer = document.querySelector(".hours")

let startInterval;
startBtn.addEventListener("click", () => {
    if (startInterval == undefined) {
        startInterval = setInterval(() => {
            if (parseInt(secondsContainer.innerHTML) < 59) {
                secondsContainer.innerHTML = parseInt(secondsContainer.innerHTML) + 1;
            }
            if (parseInt(secondsContainer.innerHTML) == 59) {
                secondsContainer.innerHTML = "00";
                if (parseInt(minutesContainer.innerHTML) < 59) {
                    minutesContainer.innerHTML = parseInt(minutesContainer.innerHTML) + 1 + ":";
                }
                if (parseInt(minutesContainer.innerHTML) == 59) {
                    minutesContainer.innerHTML = "00:";
                    if (parseInt(hoursContainer.innerHTML) < 23) {
                        hoursContainer.innerHTML = parseInt(hoursContainer.innerHTML) + 1 + ":";
                    }
                    if (parseInt(hoursContainer.innerHTML) == 23) {
                        clearInterval(startInterval)
                        hoursContainer.innerHTML = "00:";
                        minutesContainer.innerHTML = "00:";
                        secondsContainer.innerHTML = "00";

                    }
                }

            }

        }, 1000)
    }
})

stopBtn.addEventListener("click", () => {
    clearInterval(startInterval);
    startInterval = undefined;
})

resetBtn.addEventListener("click", () => {
    clearInterval(startInterval);
    startInterval = undefined;
    hoursContainer.innerHTML = "00:";
    minutesContainer.innerHTML = "00:";
    secondsContainer.innerHTML = "00";

})

