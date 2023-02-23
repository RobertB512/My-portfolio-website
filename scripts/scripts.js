// animation content area
let contentContainers = document.querySelectorAll(".select-item");
let orderedItemBoxes = document.querySelectorAll(".ordered-item-box");
let food = document.querySelectorAll(".food");
let tablet = document.querySelector(".tablet");
let backToTableBtn = document.querySelector(".back-to-table");

// audio selection area
let backgroundAudio = document.querySelector("audio");
let soundArea = document.querySelector(".sound-box");
let soundBtn = document.querySelector(".play-and-pause");
let playing = false;

// some presets
backToTableBtn.classList.add("hide-back-btn");
// backToTableBtn.classList.remove("show-back-btn")

// trigger animation area
// for the animation of the content containers
// contentContainers.forEach(contentContainer => contentContainer.addEventListener("click", () => {
//   contentContainer.classList.add("content-container-anim")
//   backToTableBtn.classList.remove("hide-back-btn")
//   backToTableBtn.classList.add("show-back-btn")
// }))

for (let orderedItemBox of orderedItemBoxes) {
	orderedItemBox.addEventListener("click", () => {
		orderedItemBox.classList.add("anim-order");
    backToTableBtn.classList.remove("hide-back-btn");
    backToTableBtn.classList.add("show-back-btn");
	});
	
}

tablet.addEventListener("click", () => {
	tablet.classList.add("anim-tablet");
	backToTableBtn.classList.remove("hide-back-btn");
	backToTableBtn.classList.add("show-back-btn");
});

// go back to table
backToTableBtn.addEventListener("click", () => {
	for (let orderedItemBox of orderedItemBoxes) {
		orderedItemBox.classList.remove("anim-order");
	}
	tablet.classList.remove("anim-tablet");
	backToTableBtn.classList.remove("show-back-btn");
	backToTableBtn.classList.add("hide-back-btn");
});

// for the background sound
soundBtn.addEventListener("click", () => {
	playing ? backgroundAudio.pause() : backgroundAudio.play();

	backgroundAudio.onplaying = () => {
		playing = true;
		soundBtn.textContent = "PAUSE";
	};
	backgroundAudio.onpause = () => {
		playing = false;
		soundBtn.textContent = "PLAY";
	};
});
