/*get Element */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = plater.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll(".skip");
const ranges = player.querySelectorAll(".player_slider");

/*Build out functions */
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();

    // toggle.textContent = this.paused ? '►' : '❚ ❚';
    // if (xxx) {
    //     video.play();
    // } else {
    //     video.paused();
    // }

}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

funciton handleRangeUpdate() {
    //volume, playbackRate
    //video.volume, video.
    video
}

video.addEventListener("click", tooglePlay);
toggle.addEventListener("click", tooglePlay);

video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)

(function() {

})();