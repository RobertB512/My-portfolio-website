// animation content area
let contentContainers = document.querySelectorAll(".select-item");
let orderedItemBoxes = document.querySelectorAll(".ordered-item-box");
let coffeeBox = document.querySelector(".coffee-box")
let foodBox = document.querySelector(".food-box")
let food = document.querySelector(".food");
let tablet = document.querySelector(".tablet");
let backToTableBtn = document.querySelector(".back-to-table");

// audio selection area
let backgroundAudio = document.querySelector("audio");
let soundArea = document.querySelector(".sound-box");
let soundBtn = document.querySelector(".play-and-pause");
let playing = false;

// some presets
backToTableBtn.classList.add("hide-back-btn");

// trigger animation area

let animTableItem = (item, animClass) => {
  item.addEventListener("click", () => {
    item.classList.add(animClass)
    if (item.querySelector(".food")) {
      food.classList.add("anim-food")
    } 
    backToTableBtn.classList.remove("hide-back-btn");
    backToTableBtn.classList.add("show-back-btn");
  })
}

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


animTableItem(coffeeBox, "anim-order")
animTableItem(foodBox, "anim-order")
animTableItem(tablet, "anim-tablet")


// go back to table
backToTableBtn.addEventListener("click", () => {
	for (let orderedItemBox of orderedItemBoxes) {
		orderedItemBox.classList.remove("anim-order");
	}
  food.classList.remove("anim-food")
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
