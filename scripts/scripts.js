let backgroundAudio = document.querySelector("audio")
let soundArea = document.querySelector(".sound-box")
let soundBtn = document.querySelector(".play-and-pause")
let playing = false

soundBtn?.addEventListener("click", () => {
  playing ? backgroundAudio?.pause() : backgroundAudio?.play()

  backgroundAudio.onplaying = function() {
    playing = true
    soundBtn.textContent = "PAUSE"
  }
  backgroundAudio.onpause = function() {
    playing = false
    soundBtn.textContent = "PLAY"

  }
})



