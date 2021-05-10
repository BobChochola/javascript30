(function() {
    let timer;
    const buttons = document.querySelectorAll(".timer__controls > button");
    const timeLeft = document.querySelector(".display__time-left");
    const endTime = document.querySelector(".display__end-time");

    const startTimer = function(sec) {
        clearInterval(timer);
        const now = new Date().getTime();
        const end = now + sec * 1000;

        //倒數計時

        timer = setInterval(function() {
            const secLeft = Math.floor((end - Date.now()) / 1000);
            if (secLeft >= 0) {
                let displaymin = Math.floor(secLeft / 60);
                let displaysec = secLeft % 60;
                displaysec = displaysec < 10 ? "0" + displaysec : displaysec;
                console.log(displaysec)
                timeLeft.innerText = `${displaymin}:${displaysec}`;
            } else {
                clearInterval(timer);
            }
        }, 100);

        //顯示最後時間

        const endDate = new Date(end);
        let hour = endDate.getHours();
        let min = endDate.getUTCMinutes();
        let seconds = endDate.getUTCSeconds();
        min = min < 10 ? "0" + min : min;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        endTime.innerText = `Back at ${hour}:${min}:${seconds}`

    };

    const setTimer = function() {
        const sec = parseInt(this.dataset.time);
        startTimer(sec)
    };

    buttons.forEach(button => button.addEventListener("click", setTimer));

    document.querySelector("#custom").addEventListener("submit", function(e) {
        e.preventDefault();
        const value = parseInt(this.minutes.value);
        if (value) {
            startTimer(value * 60)
            this.reset();
        }
    });


})();