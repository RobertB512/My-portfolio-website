// animation content area
let contentContainers = document.querySelectorAll(".select-item");
let orderedItemBoxes = document.querySelectorAll(".ordered-item-box");
let tableSectionHeadings = document.querySelectorAll(".table-section-heading");
let coffeeBox = document.querySelector(".coffee-box");
let aboutMe = document.querySelector(".about-me");
let foodBox = document.querySelector(".food-box");
let food = document.querySelector(".food");
let likesInterests = document.querySelector(".likes-interests");
let tablet = document.querySelector(".tablet");
let backToTableBtn = document.querySelector(".back-to-table");

// audio selection area
let backgroundAudio = document.querySelector("audio");
let soundArea = document.querySelector(".sound-box");
let soundBtn = document.querySelector(".play-and-pause");
let playing = false;

// some presets
aboutMe.classList.add("hide-content");
likesInterests.classList.add("hide-content");
backToTableBtn.classList.add("hide-content");

// trigger animation area
let animTableItem = (item, showTextContent, animClass) => {
	item.addEventListener("click", () => {
		item.classList.add(animClass);
		if (item.querySelector(".food")) {
			food.classList.add("anim-food");
		}

		for (let tableSectionHeading of tableSectionHeadings) {
			tableSectionHeading.classList.remove("show-content");
			tableSectionHeading.classList.add("hide-content");
		}

		showTextContent.classList.remove("hide-content");
		showTextContent.classList.add("show-content");
		backToTableBtn.classList.remove("hide-content");
		backToTableBtn.classList.add("show-content");
	});
};

// for (let orderedItemBox of orderedItemBoxes) {
// 	orderedItemBox.addEventListener("click", () => {
// 		orderedItemBox.classList.add("anim-order");
//     food.classList.add("anim-food")
//     backToTableBtn.classList.remove("hide-back-btn");
//     backToTableBtn.classList.add("show-back-btn");
// 	});
// }

// coffeeBox.addEventListener("click", () => {
//   coffeeBox.classList.add("anim-order");
//     backToTableBtn.classList.remove("hide-back-btn");
//     backToTableBtn.classList.add("show-back-btn");
// })

// foodBox.addEventListener("click", () => {
//   foodBox.classList.add("anim-order");
//     food.classList.add("anim-food")
//     backToTableBtn.classList.remove("hide-back-btn");
//     backToTableBtn.classList.add("show-back-btn");
// })

// tablet.addEventListener("click", () => {
// 	tablet.classList.add("anim-tablet");
// 	backToTableBtn.classList.remove("hide-back-btn");
// 	backToTableBtn.classList.add("show-back-btn");
// });

animTableItem(coffeeBox, aboutMe, "anim-order");
animTableItem(foodBox, likesInterests, "anim-order");
animTableItem(tablet, "anim-tablet");

// go back to table
backToTableBtn.addEventListener("click", () => {
	for (let orderedItemBox of orderedItemBoxes) {
		orderedItemBox.classList.remove("anim-order");
	}

	aboutMe.classList.remove("show-content");
	aboutMe.classList.add("hide-content");
	likesInterests.classList.remove("show-content");
	likesInterests.classList.add("hide-content");

	for (let tableSectionHeading of tableSectionHeadings) {
		tableSectionHeading.classList.remove("hide-content");
		tableSectionHeading.classList.add("show-content");
	}

	food.classList.remove("anim-food");
	tablet.classList.remove("anim-tablet");
	backToTableBtn.classList.remove("show-content");
	backToTableBtn.classList.add("hide-content");
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
